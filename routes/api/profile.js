const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const config = require('config');
const User = require('../../models/User');

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

// @route   GET /api/profile/:userId
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

    res.status(500).send('Server error...');
  }
});
module.exports = router;
