const express = require('express');
const { getAllCoffees } = require('../controllers/coffe.controller.js');
const router = express.Router();

router.get('/', getAllCoffees);

module.exports = router;
