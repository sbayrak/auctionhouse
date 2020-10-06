const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  companyfullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  taxnum: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  social: {
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
  },
  avatar: {
    type: String,
  },
  bio: {
    type: String,
  },
  taxname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
