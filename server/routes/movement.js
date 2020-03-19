'use strict';

const { Router } = require('express');
const router = new Router();
const uploader = require('./../multer-configure.js'); 

const Movement = require('./../models/movement');

// router forlist of movements
router.get('/list', async (req, res, next) => {
  try {
    const movements = await Movement.find();
    res.json( movements );
  } catch (error) {
    next(error);
  }
});


//router for create movement
router.post('/create', uploader.single('picture'), async (req, res, next) => {
  console.log("got there");
  const { name, setup, protip, description, execution, video } = req.body;
  let picture;
  if (req.file) picture = req.file.url;
  const newMovement = { name, setup, protip, description,execution, picture,video};
  try {
    const newMovementResult = await Movement.create(newMovement);
    res.json( newMovementResult );
  } catch (error) {
    next(error);
  }
});

// router for single movement
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const movement = await Movement.findById(id);
    res.json( movement );
  } catch (error) {
    next(error);
  }
});


module.exports = router;
