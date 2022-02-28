const express = require('express');
const {
  getAllCoffees,
  getSingleCoffee,
  createCoffee,
} = require('../controllers/coffe.controller.js');
const router = express.Router();

router.get('/', getAllCoffees);

router.post('/', createCoffee);

router.get('/:id', getSingleCoffee);

module.exports = router;
