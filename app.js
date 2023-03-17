const express = require('express')
const app = express();
const cors = require('cors')
const useRouter = require('./Routes/User.route')

app.use(express.json());
app.use(cors());

app.use('/api/v1/user',useRouter);

app.get('/',async(req,res,next)=>{
    res.send("Hello world!!");
})

module.exports = app;