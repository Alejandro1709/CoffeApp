const fs = require('fs');
const path = require('path');

const coffees = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/coffees.json'), 'utf8')
);

exports.getAllCoffees = (req, res) => {
  res.send(coffees);
};
