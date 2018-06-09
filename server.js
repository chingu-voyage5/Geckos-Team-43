const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const bodyParser = require("body-parser");
const passport = require("passport");
const logger = require("morgan");

const app = express();

//setup middleware to get req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//log activity in console with morgan
app.use(logger("dev"));

//db config
const db = process.env.mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("Connected to Mongo"))
  .catch(err => console.log(err));

//init and configure passport
app.use(passport.initialize());
require("./config/passport")(passport);

// app.use("/api/users", users);

// use routes
app.use("/api/users", users);

const port = process.env.PORT || 10000;

app.listen(10000, () => {
  console.log(`Listening on ${port}`);
});
