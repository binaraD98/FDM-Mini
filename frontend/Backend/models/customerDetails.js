const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerDetailsSchema = new Schema({

  Gender: {
    type: String,
  },
  Response: {
    type: String,
  },
});

module.exports = CustomerDetails = mongoose.model("CustomerDetails", CustomerDetailsSchema);