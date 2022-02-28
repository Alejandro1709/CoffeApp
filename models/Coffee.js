const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
  coffeeName: {
    type: String,
    required: [true, 'Please provide a name for your coffee'],
    trim: true,
    unique: true,
  },
  coffeeSlug: String,
  coffeImage: String, // Make required after
  coffeePrices: [
    {
      type: {
        type: String,
        required: true,
        default: 'Alto',
        enum: ['Alto', 'Grande', 'Venti'],
      },
      price: {
        type: Number,
      },
      cap: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model('Coffee', coffeeSchema);
