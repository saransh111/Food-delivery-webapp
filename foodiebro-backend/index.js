import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import connectDB from "./Config/db.js";
import Stripe from 'stripe';
const stripe = new Stripe("sk_test_51JyhF1SGZNht59JnfKU5OEO1YzsX07EdBi7VBDtek2Q5KZFoLHc2D6xJMqStUDpApxeOGVQzuXUbd4JMffeZqXdb00v8Ywudaf")
import { v4 as uuid } from 'uuid'; 
const app = express();
dotenv.config();

connectDB();
app.get("/",(req,res)=>{
   res.send("API running");
});

app.use(express.json());
app.use(cors());
app.use('/api/users',userRoutes);
app.use('/api/notes',noteRoutes);
app.post("/payment", (req, res) => {
   const { product, token } = req.body;
   console.log("PRODUCT ", product);
   console.log("PRICE ", product.price);
   const idempontencyKey = uuid();
 
   return stripe.customers
     .create({
       email: token.email,
       source: token.id
     })
     .then(customer => {
       stripe.charges.create(
         {
           amount: product.price * 100,
           currency: "usd",
           customer: customer.id,
           receipt_email: token.email,
           description: `purchase of ${product.name}`,
           shipping: {
             name: token.card.name,
             address: {
               country: token.card.address_country
             }
           }
         },
         { idempontencyKey }
       );
     })
     .then(result => res.status(200).json(result))
     .catch(err => console.log(err));
 });
const PORT=process.env.PORT || 5001;

app.listen(PORT,console.log(`BE started at port ${PORT}`));