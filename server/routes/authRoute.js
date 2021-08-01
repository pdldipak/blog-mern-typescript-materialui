/* eslint-disable no-underscore-dangle */

const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// REGISTER
authRouter.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
authRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(400).json('user name is not available');
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      res.status(400).json('wrong password');
    }

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = authRouter;
