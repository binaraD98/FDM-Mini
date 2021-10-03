const CustomerDetails = require("../models/customerDetails");

//get all customer details
const getAllCustomerDetails = async (req, res) => {
  try {
    const customerDetailsList = await CustomerDetails.find();
    res.json(customerDetailsList);
  } catch(err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

//add a customer detail
const addCustomerDetails= async (req, res) => {
  const { Gender,Response } = req.body;

  try {
    //create a customer instance
    const customerDetails = new CustomerDetails({
      Gender,
      Response
    });


    //save Cystomer details to the database
    await customerDetails
      .save()
      .then(async (addedCustomer) => {
        res.json(addedCustomer);
      })
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (err) {
    //Something wrong with the server
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};

module.exports = { addCustomerDetails,getAllCustomerDetails};
