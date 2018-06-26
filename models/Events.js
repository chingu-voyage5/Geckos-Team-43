const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and make a reference to users table in our DB

const EventsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  type: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  participants: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  eventDate: {
    type: Date,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Events = mongoose.model('events', EventsSchema);
