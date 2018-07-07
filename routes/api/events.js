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
//@desc   Get posts
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
//@desc   Create an event
//@access Private

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventsInput(req.body);

    //chekc validation
    if (!isValid) {
      return res.status(400).json({ errors });
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

//@route  GET api/posts/:id
//@desc   Get post by id
//@access Public

router.get('/:id', (req, res) => {
  Events.findById(req.params.id)
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      res.status(400).json({ noeventfound: 'No event was found with that ID' });
    });
});

//@route  DELETE api/posts/:id
//@desc   Delete the post
//@access Private

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(events => {
      if (events.user.toString() !== req.user.id) {
        return res.status(401).json({ notauthorized: 'User not authorized' });
      }
      Events.remove()
        .then(() => {
          res.json({ success: true });
        })
        .catch(err => res.status(400).json({ error: 'Post not found' }));
    });
  }
);

//@route  POST api/events/attend/:id
//@desc   Attend an event
//@access Private

router.post(
  '/attend/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Events.findOne({ user: req.user.id }).then(profile => {
      Events.findById(req.params.id)
        .then(events => {
          if (
            events.participants.filter(attend => {
              attend.user.toString() === req.user.id;
            }).length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyAttending: 'User already attending this event' });
          }
          events.participants.unshift({ user: req.user.id });

          events.save().then(events => res.json(events));
        })
        .catch(err =>
          res.status(400).json({ postnotfound: 'No post found with that id' })
        );
    });
  }
);

//@route  DELETE api/events/attend/:id
//@desc   Un-attend an event
//@access Private

router.post(
  '/unattend/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Events.findById(req.params.id).then(events => {
        if (
          events.participants.filter(attending => {
            attending.user.toString() === req.user.id;
          }).length > 0
        ) {
          return res
            .status(400)
            .json({ notattending: "You're not attending this event" });
        }
        let removeIndex = events.participants
          .map(item => item.user.toString())
          .indexOf(req.user.id);

        events.participants.splice(removeIndex, 1);
        events
          .save()
          .then(events => res.json(events))
          .catch(err => res.status(404).json({ err: 'post not fouind' }));
      });
    });
  }
);

module.exports = router;
