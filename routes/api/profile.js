const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const config = require('config');
const mongoose = require('mongoose');
const User = require('../../models/User');
const { body, validationResult } = require('express-validator');
const Advert = require('../../models/Advert');

// @route   GET /api/profile/me
// @desc    Get current logged user
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error...');
  }
});

// @route   GET /api/profile/
// @desc    Get all profiles (companies)
// @access  Public
router.get('/', async (req, res) => {
  try {
    let profiles = await User.find();
    if (!profiles) {
      return res.status(400).json({ msg: 'No profile has been found' });
    }

    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error...');
  }
});

// @route   GET /api/profile/user/:userId
// @desc    Get profile by userId
// @access  Public
router.get('/user/:userId', async (req, res) => {
  try {
    let user = await User.findById(req.params.userId).select('-password');

    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: 'Invalid object ID' });
    }

    res.status(500).send('Server error.....');
  }
});

// @route   POST /api/profile/update
// @desc    Update profile information
// @access  Private
router.post(
  '/update',
  [
    auth,
    [
      body('website', 'Please enter a valid website').not().isEmpty(),
      body('location', 'Please enter a valid location').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      website,
      bio,
      location,
      facebook,
      instagram,
      twitter,
      linkedin,
      youtube,
    } = req.body;
    let profileFields = {};
    if (website) profileFields.website = website;
    if (bio) profileFields.bio = bio;
    if (location) profileFields.location = location;
    profileFields.social = {};
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;
    if (twitter) profileFields.social.twitter = twitter;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (youtube) profileFields.social.youtube = youtube;
    try {
      let user = await User.findByIdAndUpdate(
        { _id: req.user.id },
        {
          $set: profileFields,
        },
        { new: true }
      );

      res.json(user);
    } catch (err) {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ msg: 'Invalid object ID' });
      }
      res.status(500).send('Server error.....');
    }
  }
);

// @route   DELETE /api/profile/
// @desc    Delete profile, user and adverts
// @access  Private
router.delete('/me', auth, async (req, res) => {
  try {
    await User.findOneAndRemove({ _id: req.user.id });
    // @@TODO
    // REMOVE ADVERTS ALSO
    await Advert.deleteMany({ user: req.user.id });
    res.json({ msg: 'user and adverts deleted...' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error...');
  }
});

module.exports = router;
