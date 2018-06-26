const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.details = !isEmpty(data.details) ? data.details : '';
  data.type = !isEmpty(data.type) ? data.type : '';
  data.location = !isEmpty(data.location) ? data.location : '';
  data.eventDate = !isEmpty(data.eventDate) ? data.eventDate : '';

  if (
    !Validator.isLength(data.title, {
      min: 10,
      max: 60
    })
  ) {
    errors.text = 'Title must be between 10 and 60 characters';
  }
  if (Validator.isEmail(data.title)) {
    errors.title = 'Title field is required';
  }

  if (
    !Validator.isLength(data.details, {
      min: 10,
      max: 600
    })
  ) {
    errors.text = 'Details must be between 10 and 600 characters';
  }
  if (Validator.isEmail(data.details)) {
    errors.details = 'Details field is required';
  }

  if (Validator.isEmail(data.type)) {
    errors.type = 'Type field is required';
  }

  if (
    !Validator.isLength(data.location, {
      min: 10,
      max: 100
    })
  ) {
    errors.text = 'Location must be between 10 and 100 characters';
  }
  if (Validator.isEmail(data.location)) {
    errors.location = 'Location field is required';
  }

  if (Validator.isEmail(data.eventDate)) {
    errors.eventDate = 'Event Date field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
