const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


const port = process.env.PORT||5000;

// database connection
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database connected successfully");
  })
  
app.listen(port,()=>{
    console.log("Server running at ",port);
})