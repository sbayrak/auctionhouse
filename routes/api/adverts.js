const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Advert = require('../../models/Advert');
const mongoose = require('mongoose');

// @route   GET /api/adverts
// @desc    Get all adverts
// @access  Private

// @route   POST /api/adverts/create
// @desc    Create a new advert
// @access  Private
router.post(
  '/create',
  [
    auth,
    [
      body('title', 'Please enter a valid title').not().isEmpty(),
      body('text', 'Please enter a valid text').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, text } = req.body;
    let advertFields = {};
    advertFields.user = req.user.id;
    advertFields.title = title;
    advertFields.text = text;
    advertFields.status = false;

    try {
      let user = await User.findById(req.user.id).select('-password');
      advertFields.company = user.company;
      advertFields.location = user.location;

      let advert = new Advert(advertFields);
      await advert.save();

      res.json(advert);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error...');
    }
  }
);

module.exports = router;
