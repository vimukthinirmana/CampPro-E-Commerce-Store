const express = require("express");
const cors = require("cors");
// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
// const Stripe = require('stripe')

// camppro-store
// E18FJSqustijTVJY

const app = express();
app.use(cors());
app.use(express.json({limit:"10mb"}));

const PORT = process.env.PORT || 8080;
//monodb connection
console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("Connect to Databs"))
.catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    confirmPassword: String,
    image: String,
  });

//
const userModel = mongoose.model("user", userSchema);



//api
app.get("/", (req, res) => {
    res.send("Server is running");
  });

app.post("/signup",(req,res)=>{
    console.log(req.body)
    const { email } = req.body;
    userModel.findOne({ email: email }, (err, result) => {
        // console.log(result);
        console.log(err);
        if (result) {
          res.send({ message: "Email id is already register", alert: false });
        } else {
          const data = userModel(req.body);
          const save = data.save();
          res.send({ message: "Successfully sign up", alert: true });
        }
      });

})

//api login
app.post("/login", (req, res) => {
    // console.log(req.body);
    const { email } = req.body;
    userModel.findOne({ email: email }, (err, result) => {
      if (result) {
        const dataSend = {
          _id: result._id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          image: result.image,
        };
        console.log(dataSend);
        res.send({
          message: "Login is successfully",
          alert: true,
          data: dataSend,
        });
      } else {
        res.send({
          message: "Email is not available, please sign up",
          alert: false,
        });
      }
    });
  });


//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));
