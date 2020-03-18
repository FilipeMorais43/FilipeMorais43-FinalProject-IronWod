'use strict';

const { Router } = require('express');
const router = new Router();

const Wod = require('./../models/wod');

router.get('/list', async (req, res, next) => {
    try {
      const wods = await Wod.find();
      res.json( wods );
    } catch (error) {
      next(error);
    }
  });

  router.get('/list/:user_Id', async (req, res, next) => {
    const userId = req.params.user_Id;
    console.log("BACKEND USER ID",userId);
    try {
      const wods = await Wod.find({ user:userId });
      res.json( wods );
    } catch (error) {
      next(error);
    }
  });

  router.post('/create', async (req, res, next) => {
    const { name, wod, score, tips, user } = req.body;
    const newWod = { name, wod, score, tips, user };
    try {
      const newWodResult = await Wod.create(newWod);
      res.json( newWodResult );
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;

  