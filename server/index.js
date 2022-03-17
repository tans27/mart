const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./routers/auth")
const categoryRouter = require("./routers/category")
const productRouter = require("./routers/product")
require("dotenv").config()

const connectDB = async () =>{
  try{
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mart.qkrko.mongodb.net/mart?retryWrites=true&w=majority`,)

    console.log('MongoDB connected')
  } catch(error){
    console.log(error.message)
    process.exit(1)
  }
}

connectDB()

const app = express();
app.use(express.json())
app.use(cors())

app.use('/api/auth',authRouter);
app.use('/api/category',categoryRouter);
app.use('/api/product',productRouter);

const port =  5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});