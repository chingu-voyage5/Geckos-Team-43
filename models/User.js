const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//setup our schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//here we create our model from the schema, linking it to the "users" table
//of our database
module.exports = User = mongoose.model("users", UserSchema);
