const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();
// const Stripe = require('stripe')

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Server is running");
  });

app.post("/signup",(req,res)=>{
    console.log(req.body)
})

//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));
