const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe = require('stripe')

// camppro-store
// E18FJSqustijTVJY

const app = express();
app.use(cors());
app.use(express.json({limit:"10mb"}));

const PORT = process.env.PORT || 8080;

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Databse"))
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



//sign up
// app.post("/signup", async (req, res) => {
//   // console.log(req.body);
//   const { email } = req.body;

//   userModel.findOne({ email: email }, (err, result) => {
//     // console.log(result);
//     console.log(err);
//     if (result) {
//       res.send({ message: "Email id is already register", alert: false });
//     } else {
//       const data = userModel(req.body);
//       const save = data.save();
//       res.send({ message: "Successfully sign up", alert: true });
//     }
//   });
// });


app.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.send({ message: "Email id is already registered", alert: false });
    }

    // Save new user data
    const data = new userModel(req.body);
    await data.save();

    res.send({ message: "Successfully signed up", alert: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error", alert: false });
  }
});




//api login
// app.post("/login", (req, res) => {
//     // console.log(req.body);
//     const { email } = req.body;
//     userModel.findOne({ email: email }, (err, result) => {
//       if (result) {
//         const dataSend = {
//           _id: result._id,
//           firstName: result.firstName,
//           lastName: result.lastName,
//           email: result.email,
//           image: result.image,
//         };
//         console.log(dataSend);
//         res.send({
//           message: "Login is successfully",
//           alert: true,
//           data: dataSend,
//         });
//       } else {
//         res.send({
//           message: "Email is not available, please sign up",
//           alert: false,
//         });
//       }
//     });
//   });

app.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user with the given email
    const result = await userModel.findOne({ email: email });

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
        message: "Login is successful",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Internal Server Error",
      alert: false,
    });
  }
});



//product section

const schemaProduct = mongoose.Schema({
  name: String,
  category:String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product",schemaProduct)



//save product in data 
//api
app.post("/uploadProduct",async(req,res)=>{
  // console.log(req.body)
  const data = await productModel(req.body)
  const datasave = await data.save()
  res.send({message : "Upload successfully"})
})

//
app.get("/product",async(req,res)=>{
const data = await productModel.find({})
res.send(JSON.stringify(data))
})




// Fetch all products
app.get("/product", async (req, res) => {
  try {
    const data = await productModel.find({});
    res.send(JSON.stringify(data));
  } catch (error) {
    res.status(500).send({ message: "Error fetching products" });
  }
});

// Update a product
// app.put("/product/:id", async (req, res) => {
//   const { name, category, image, price, description } = req.body;
//   const updatedProduct = { name, category, image, price, description };

//   try {
//     const product = await productModel.findByIdAndUpdate(req.params.id, updatedProduct, { new: true });
//     if (!product) return res.status(404).send({ message: "Product not found" });
//     res.json(product);
//   } catch (error) {
//     res.status(500).send({ message: "Error updating product" });
//   }
// });



//  Delete a product
// app.delete("/product/:id", async (req, res) => {
//   try {
//     const product = await productModel.findByIdAndDelete(req.params.id);
//     if (!product) return res.status(404).send({ message: "Product not found" });
//     res.json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).send({ message: "Error deleting product" });
//   }
// });





/*****payment getWay */
console.log(process.env.STRIPE_SECRET_KEY)


const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY)

app.post("/create-checkout-session",async(req,res)=>{

     try{
      const params = {
          submit_type : 'pay',
          mode : "payment",
          payment_method_types : ['card'],
          billing_address_collection : "auto",
          shipping_options : [{shipping_rate : "shr_1PWxzTRxr6bwP0Xgg3wxK1tO"}],

          line_items : req.body.map((item)=>{
            return{
              price_data : {
                currency : "lkr",
                product_data : {
                  name : item.name,
                  // images : [item.image]
                },
                unit_amount : item.price * 100,
              },
              adjustable_quantity : {
                enabled : true,
                minimum : 1,
              },
              quantity : item.qty
            }
          }),

          success_url : `${process.env.FRONTEND_URL}/success`,
          cancel_url : `${process.env.FRONTEND_URL}/cancel`,

      }

      
      const session = await stripe.checkout.sessions.create(params)
      // console.log(session)
      res.status(200).json(session.id)
     }
     catch (err){
        res.status(err.statusCode || 500).json(err.message)
     }

});




//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));
