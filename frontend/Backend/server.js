const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");


const app = express();

//Connect Database
connectDB();

//Using Cors
app.use(cors());

//Init Middleware( include  bodyparser through express)
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("FDM Backend Api Running"));


//Define Routes
//-------------------User Details---------------------
//app.use("/api/customerdetails", require("./routes/customerDetail.route"));
app.use("/api/customerdetails", require("./routes/customerDetail"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));