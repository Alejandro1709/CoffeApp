const express = require('express');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

connectDB();

app.use('/api/v1/coffees', require('./routes/coffe.routes'));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(4000, () => console.log('Server is live at: localhost:4000'));
