'use strict';

const { Router } = require('express');

const passport = require('passport');
const User = require('./../models/user');

const router = new Router();

router.post(
  '/sign-up',
  passport.authenticate('local-sign-up', {
    successRedirect: '/api/authentication/user-information',
    failureRedirect: '/sign-up'
  })
);

router.post(
  '/sign-in',
  passport.authenticate('local-sign-in', {
    successRedirect: '/api/authentication/user-information',
    failureRedirect: '/sign-in'
  })
);

router.post('/sign-out', (req, res, next) => {
  req.logout();
  res.json({});
});

router.get('/user-information', (req, res, next) => {
  res.json({ user: req.user || null });
});

const uploader = require('./../multer-configure.js');

router.patch('/user-information', uploader.single('picture'), async (req, res, next) => {
  const { email, name } = req.body;
  let picture;
  if (req.file) picture = req.file.url;
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        name,
        email,
        ...(picture ? { picture } : {})
      },
      { new: true }
    );
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
