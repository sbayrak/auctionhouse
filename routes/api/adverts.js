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
      body('location', 'Please enter a valid text').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, text, location } = req.body;
    let advertFields = {};
    advertFields.user = req.user.id;
    advertFields.title = title;
    advertFields.text = text;
    advertFields.status = false;
    advertFields.accepted = {};
    advertFields.location = location;

    try {
      let user = await User.findById(req.user.id).select('-password');
      advertFields.company = user.company;

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
// @access  Private.
router.get('/mybids', auth, async (req, res) => {
  try {
    let adverts = await Advert.find();

    let mybids = [];
    let bidsByMe = [];
    for (let x in adverts) {
      let bid = adverts[x].bids;

      for (let y in bid) {
        let innerBid = bid[y];
        mybids.push(innerBid);
      }
    }

    for (let x in mybids) {
      let bid = mybids[x];

      if (bid.user.toString() === req.user.id) {
        bidsByMe.push(bid);
      }
    }

    res.json(bidsByMe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error...');
  }
});

// @route   POST /api/adverts/accept/:advertId
// @desc    Accept a bid
// @access  Private
router.post('/accept/:advertId/:bidId', auth, async (req, res) => {
  try {
    let advert = await Advert.findById(req.params.advertId);
    let advertOwner = await User.findById(req.user.id).select('-password');
    let acceptedBid = advert.bids.find((bid) => bid.id == req.params.bidId);

    const acceptedFields = {};
    acceptedFields.user = advert.user;
    acceptedFields.bidderId = acceptedBid.user;
    acceptedFields.bidderCompany = acceptedBid.company;
    acceptedFields.bid = acceptedBid.bid;
    acceptedFields.date = Date.now();

    advert = await Advert.findByIdAndUpdate(
      {
        _id: req.params.advertId,
      },
      {
        $set: { status: true, accepted: acceptedFields },
      },
      {
        new: true,
      }
    );
    res.json(advert);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error...');
  }
});

// @route   GET /api/adverts/accepted-bids
// @desc    Get my accepted bids
// @access  Private
router.get('/accepted-bids', auth, async (req, res) => {
  try {
    let adverts = await Advert.find();
    const myAcceptedBids = adverts
      .map((advert) => advert.accepted)
      .filter((accept) => JSON.stringify(accept) !== '{}');

    res.json(myAcceptedBids);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error...');
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
      bidFields.advertNo = req.params.advertId;
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

// @route   POST /api/adverts/comment/:advertId
// @desc    Comment on an advert
// @access  Private
router.post(
  '/comment/:advertId',
  [auth, [body('text', 'Please enter a text').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let advert = await Advert.findById(req.params.advertId);
      let user = await User.findById(req.user.id);
      let newComment = {};
      newComment.user = user.id;
      newComment.text = req.body.text;
      newComment.company = user.company;
      newComment.avatar = user.avatar;

      advert.comments.push(newComment);
      await advert.save();

      res.json(advert.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error...');
    }
  }
);

// @route   DELETE /api/adverts/comment/:id/:commentId
// @desc    Delete a comment
// @access  Private
router.delete('/comment/:id/:commentId', auth, async (req, res) => {
  try {
    const advert = await Advert.findById(req.params.id);

    // PULL OUT COMMENT
    const comment = advert.comments.find(
      (comment) => comment.id == req.params.commentId
    );

    // MAKE SURE COMMENT EXISTS
    if (!comment) {
      res.status(404).json({ msg: 'Comment does not exists' });
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      res.status(401).json({ msg: 'User not authorized' });
    }

    const removeIndex = advert.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);
    advert.comments.splice(removeIndex, 1);

    await advert.save();

    res.json(advert.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error...');
  }
});

// @route   DELETE /api/adverts/:advertId
// @desc    Delete an advert
// @access  Private
router.delete('/:advertId', auth, async (req, res) => {
  try {
    let advert = await Advert.findById(req.params.advertId);

    if (!advert) {
      return res.status(404).json({ msg: 'Advert not found...' });
    }

    // CHECK USER
    if (advert.user != req.user.id) {
      return res.status(401).json({ msg: 'User not authorized...' });
    }

    await advert.remove();
    res.json({ msg: 'Advert removed...' });
  } catch (err) {
    if (!mongoose.Types.ObjectId.isValid(req.params.advertId)) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server error...');
  }
});

module.exports = router;
