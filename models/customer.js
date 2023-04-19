const mongoose = require("mongoose")
const customerSchema = mongoose.Schema({
Cust_Name: String,
Mail_Id: String,
Cust_Age: Number
})
module.exports = mongoose.model("Customer",
customerSchema)