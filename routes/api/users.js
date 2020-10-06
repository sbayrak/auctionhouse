const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const User = require('../../models/User');
const normalize = require('normalize-url');
const config = require('config');

// @@route  POST api/users
// @@desc   Register a user
// @@access Public
router.post(
  '/',
  [
    body('company', 'Company name is required').not().isEmpty(),
    body('companyfullname', 'Company full name is required').not().isEmpty(),
    body('email', 'Email is required').isEmail(),
    body(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    body('taxnum', 'Tax number is required').not().isEmpty(),
    body('type', 'Type of the company is required').not().isEmpty(),
    body('website', 'Website is required').not().isEmpty(),
    body(
      'taxname',
      'The tax office where your company is registered is required'
    ).isLength({ min: 10 }),
    body('location', 'Location is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      company,
      companyfullname,
      email,
      password,
      taxnum,
      type,
      website,
      taxname,
      location,
      facebook,
      twitter,
      linkedin,
      instagram,
      youtube,
      bio,
    } = req.body;
    // destruct etmediklerim => date,avatar,

    try {
      // CHECK IF THE USER EXISTS
      let user = await User.findOne({ email: email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'This email already exists' }] });
      }

      const avatar = normalize(
        gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm',
        }),
        { forceHttps: true }
      );

      // INITIALIZE THE NEW USER
      const userFields = {};
      userFields.company = company;
      userFields.companyfullname = companyfullname;
      userFields.email = email;
      userFields.password = password;
      userFields.taxnum = taxnum;
      userFields.type = type;
      userFields.website = website;
      userFields.avatar = avatar;
      userFields.taxname = taxname;
      userFields.location = location;
      if (bio) userFields.bio = bio;

      userFields.social = {};
      if (facebook) userFields.social.facebook = facebook;
      if (youtube) userFields.social.youtube = youtube;
      if (instagram) userFields.social.instagram = instagram;
      if (linkedin) userFields.social.linkedin = linkedin;
      if (twitter) userFields.social.twitter = twitter;

      // GENERATE SALT AND HASH PASSWORD
      const salt = await bcrypt.genSalt(10);
      userFields.password = await bcrypt.hash(password, salt);

      user = new User(userFields);
      await user.save();

      // RETURN JSONWEBTOKEN
      const payload = {
        user: {
          id: user.id,
        },
      };
      const key = config.get('jwtSecret');

      jwt.sign(payload, key, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error...');
    }
  }
);

module.exports = router;
