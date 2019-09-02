var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var routes = require("./routes/routes");
var mongoose = require("mongoose");
var passport = require("passport");
var cors = require("cors");

var app = express();

// Mongodb connection
mongoose.connect("mongodb://localhost:27017/schedule", function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));
var routerV1 = express.Router();
routes.setRoutes(routerV1);
app.use(routerV1);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
