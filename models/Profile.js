const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  skills: {
    type: [String]
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  interests: {
    type: [String]
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
