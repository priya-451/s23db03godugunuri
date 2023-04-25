const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  Cust_Name: String,
  Mail_Id: String,
  Cust_Age: {
    type: Number,
    min: 18,
    max: 120,
    validate: {
      validator: function(v) {
        return Number.isInteger(v);
      },
      message: props => `${props.value} is not an integer!`
    }
  }
});

module.exports = mongoose.model("Customer", customerSchema);
