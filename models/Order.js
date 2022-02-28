const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coffee',
  },
  qty: {
    type: Number,
    default: 1,
    min: 1,
  },
  coffeeType: {
    type: String,
    required: true,
    default: 'alto',
    enum: ['alto', 'grande', 'venti'],
  },
});

module.exports = mongoose.model('Order', orderSchema);
