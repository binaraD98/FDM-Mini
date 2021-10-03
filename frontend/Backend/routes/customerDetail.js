const express = require("express");
const router = express.Router();

const {
    addCustomerDetails,getAllCustomerDetails
} = require("../controllers/customerDetails");

router.get("/all", getAllCustomerDetails);
router.post("/add", addCustomerDetails);

module.exports = router;