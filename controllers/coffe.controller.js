const Coffee = require('../models/Coffee');

exports.getAllCoffees = async (req, res) => {
  try {
    const coffees = await Coffee.find();

    res.status(200).json(coffees);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

exports.getSingleCoffee = async (req, res) => {
  try {
    const coffee = await Coffee.findById(req.params.id);

    if (!coffee) {
      return res.status(404).json({ message: 'Coffee Not Found' });
    }

    res.status(200).json(coffee);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};
