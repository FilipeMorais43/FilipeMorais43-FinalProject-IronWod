'use strict';

const { Router } = require('express');
const router = new Router();

const Movement = require('./../models/movement');

// router forlist of moviments
router.get('/list', async (req, res, next) => {
  try {
    const movements = await Movement.find();
    res.json({ movements });
  } catch (error) {
    next(error);
  }
});

// router for single mobiment
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const movement = await Movement.findById(id);
    res.json({ movement });
  } catch (error) {
    next(error);
  }
});

//router for create moviment

router.post('/create', async (req, res, next) => {
  const { name, setup, protip } = req.body;
  const newMovement = { name, setup, protip };
  try {
    const newMovementResult = await Movement.create(newMovement);
    res.json({ newMovementResult });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
