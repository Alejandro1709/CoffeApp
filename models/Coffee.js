const mongoose = require('mongoose');
const slugify = require('slugify');

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

coffeeSchema.pre('save', function (next) {
  if (!this.isModified('coffeeName')) {
    next();
  }

  this.coffeeSlug = slugify(this.coffeeName);
});
module.exports = mongoose.model('Coffee', coffeeSchema);
