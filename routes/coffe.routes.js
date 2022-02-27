const express = require('express');
const {
  getAllCoffees,
  getSingleCoffee,
} = require('../controllers/coffe.controller.js');
const router = express.Router();

router.get('/', getAllCoffees);

router.get('/:id', getSingleCoffee);

module.exports = router;
