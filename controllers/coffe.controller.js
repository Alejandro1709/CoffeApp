import fs from 'fs';
import path from 'path';

const coffees = JSON.parse(
  fs.readFileSync(path.join(__dirname, '/data/coffees.json'), 'utf8')
);

export const getAllCoffees = (req, res) => {
  res.send(coffees);
};
