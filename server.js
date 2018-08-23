const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const events = require('./routes/api/events');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const app = express();

//setup middleware to get req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setup cors
app.use(cors());

//log activity in console with morgan
app.use(logger('dev'));

//db config
const db = process.env.mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('Connected to Mongo'))
  .catch(err => console.log(err));

//init and configure passport
app.use(passport.initialize());
require('./config/passport')(passport);

// app.use("/api/users", users);

// use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/events', events);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
	app.use(express.static('front-end/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'));
	})
}

const port = process.env.PORT || 10000;

app.listen(10000, () => {
  console.log(`Listening on ${port}`);
});

//exported server so we can test it
module.exports = app;
