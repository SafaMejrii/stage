var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const http = require("http");
const mongoose = require("mongoose");
const db = require("./db.json");
require("dotenv").config();
const cors = require("cors"); // Importez le package CORS
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const offresRouter = require("./routes/offre");
//pour afficher la base de données
const offreModel = require("./models/offre");
var app = express();
//connection sur la BD
mongoose
  .connect(process.env.MONGO_URI || db.mongo.uri, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to DB!");
  })
  .catch((err) => {
    console.log("error:", err.message);
  });
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000" }));


//cette partie sera utilisé pour le socket
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/offres", offresRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err.message);
});

const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", (stream) => {
  console.log("socket is connected!");
  stream.on("removeEvent", async (eventId) => {
    let checkIfOffreExist = await offreModel.findById(offreId);
    if (checkIfOffreExist) {
      await offreModel.findByIdAndDelete(offreId);
      stream.emit("offre removed", checkIfOffreExist);
    }
  });
});
server.listen(5000, () => {
  console.log("app is running on port 5000");
});
