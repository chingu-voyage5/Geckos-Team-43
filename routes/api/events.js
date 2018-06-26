const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//used the keyword "events" intead of "event" because event is a js keyword
const Events = require('../../models/Events');
const Profile = require('../../models/Profile');

//validators
const validateEventsInput = require('../../validation/events');

//test route
router.get('/test', (req, res) => {
  res.json({ success: 'events test route works' });
});

//@route  GET api/events
//@desc   Get post
//@access Public

router.get('/', (req, res) => {
  Events.find()
    .sort({
      date: -1
    })
    .then(events => {
      res.json(events);
    })
    .catch(err =>
      res.status(404).json({ nopostsfound: "Didn't find any posts " })
    );
});

//@route  POST api/events
//@desc   Create post
//@access Private

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventsInput(req.body);

    //chekc validation
    if (!isValid) {
      return res.send(400).json({ errors });
    }

    const newEvent = new Events({
      title: req.body.title,
      details: req.body.details,
      type: req.body.type,
      location: req.body.location,
      eventDate: req.body.eventDate,
      user: req.user.id
    });

    newEvent.save().then(newEvent => res.json(newEvent));
  }
);

module.exports = router;
