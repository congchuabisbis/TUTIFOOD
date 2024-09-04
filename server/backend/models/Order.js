const mongoose = require("mongoose");

const { Schema } = mongoose;

const OrderSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
  },

  phoneNumber: {
    type: String,
  },

  city: {
    type: String,
  },

  district: {
    type: String,
  },

  ward: {
    type: String,
  },

  address: {
    type: String,
  },
  status: {
    type: String,
  },
  note: {
    type: String,
  },
  total_amount: {
    type: Number,
  },
  order_data: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
