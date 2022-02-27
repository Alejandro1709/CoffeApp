const fs = require('fs');
const path = require('path');

const coffees = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/coffees.json'), 'utf8')
);

exports.getAllCoffees = (req, res) => {
  res.send(coffees);
};

exports.getSingleCoffee = (req, res) => {
  const coffee = coffees.find((c) => c.id === parseInt(req.params.id));

  console.log(req.params.id);

  if (!coffee) {
    return res.status(404).json({ message: 'Coffee Not Found' });
  }

  res.status(200).json(coffee);
};
