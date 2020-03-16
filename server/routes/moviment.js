'use strict';

const { Router } = require('express');
const router = new Router();

const Moviment = require('./../models/moviment');

// router forlist of moviments
router.get('/list', async (req, res, next) => {
  try {
    const moviments = await Moviment.find();
    res.json({ moviments });
  } catch (error) {
    next(error);
  }
});

// router for single mobiment
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const moviment = await Moviment.findById(id);
    res.json({ moviment });
  } catch (error) {
    next(error);
  }
});

//router for create moviment

router.post('/create', async (req, res, next) => {
  const { name, setup, protip } = req.body;
  const newMoviment = { name, setup, protip };
  try {
    const newMovimentResult = await Moviment.create(newMoviment);
    res.json({ newMovimentResult });
  } catch (error) {
    next(error);
  }
});
