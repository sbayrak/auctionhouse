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
router.get('/', auth, async (req, res) => {
  try {
    let adverts = await Advert.find();
    if (!adverts) {
      res.status(400).json({ msg: 'No ad found' });
    }
    res.json(adverts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error...');
  }
});

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

// @route   GET /api/adverts/advert/:advertId
// @desc    Get advert by advertId
// @access  Private
router.get('/advert/:advertId', auth, async (req, res) => {
  try {
    let advert = await Advert.findById(req.params.advertId);
    if (!advert) {
      res.status(400).json({ msg: 'No ad found' });
    }
    res.json(advert);
  } catch (err) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: 'No ad found' });
    }
    res.status(500).send('Server error...');
  }
});

// @route   GET /api/adverts/myadverts
// @desc    Get current user's adverts for 'my profile' page
// @access  Private
router.get('/myadverts', auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id);
    let adverts = await Advert.find({ user: user.id });

    if (!adverts) {
      res.status(400).json({ msg: 'No ad found...' });
    }
    res.json(adverts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error...');
  }
});

// @route   GET /api/adverts/mybids
// @desc    Get bids that I made
// @access  Private
router.get('/mybids', auth, async (req, res) => {
  try {
    let adverts = await Advert.find({
      'bids.user': req.user.id,
    }).select('-rest');

    // const bidsByMe = adverts.filter(
    //   (advert) => advert.bids.user === req.user.id
    // );
    // const bidsByMe = adverts.filter((ad) =>
    //   ad.bids.some((bid) => bid.user === req.user.id)
    // );
    // let bidsByMe = {};
    // let mybids = [];
    // for (let x in adverts) {
    //   let bid = adverts[x].bids;
    //   for (let y in bid) {
    //     let bidUser = bid[x];
    //     if (bidUser === req.user.id) {
    //       bidsByMe.adId = adverts[x].id;
    //       bidsByMe.title = adverts[x].title;
    //       bidsByMe.date = adverts[x].date;
    //       bidsByMe.bid = bid[y].bid;
    //       mybids.push(bidsByMe);
    //     }
    //   }
    // }

    res.json(adverts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error...');
  }
});

// @route   PUT /api/adverts/:advertId
// @desc    Add user's bid to the advert
// @access  Private
router.put(
  '/advert/:advertId',
  [auth, [body('bid', 'Please enter a valid bid value').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { bid } = req.body;

    try {
      // @@@@@ TODO   STOP USERS TO BID TO THEIR OWN ADVERT
      let user = await User.findById(req.user.id);
      let advert = await Advert.findById(req.params.advertId);

      let bidFields = {};
      bidFields.user = req.user.id;
      bidFields.bid = bid;
      bidFields.company = user.company;
      bidFields.avatar = user.avatar;

      advert.bids.unshift(bidFields);
      await advert.save();
      res.json(advert.bids);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error...');
    }
  }
);

module.exports = router;
