'use strict';

const { Router } = require('express');

const passport = require('passport');

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

module.exports = router;
