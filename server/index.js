const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routers/auth")
const categoryRouter = require("./routers/category")
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

app.use('/api/auth',authRouter);
app.use('/api/category',categoryRouter);

const port =  5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});