const mongoose = require('mongoose');

const AdvertSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  company: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
  },
  location: {
    type: String,
  },
  bids: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
      },
      bid: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
      },
      text: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  accepted: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
    },
    bidderId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    bidderCompany: {
      type: String,
    },
    bid: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
});

const Advert = mongoose.model('advert', AdvertSchema);

module.exports = Advert;
