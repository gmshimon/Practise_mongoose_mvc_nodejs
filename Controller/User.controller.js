const User = require('../Model/User.model');

module.exports.postUser = async(req,res,next)=>{
    try {
        const result = await User.create(req.body);

        res.status(200).json({
            status:'success',
            message:'Data inserted successfully',
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:'Failed',
            message:error.message
        })
    }
}
module.exports.getUser = async(req,res,next)=>{
    try {
        const users = await User.find({});
        res.status(200).json({
            status:'success',
            message:"Successfully fetched the data",
            data:users
        })
    } catch (error) {
        res.status.json({
            status:'Failed',
            message:error.message
        })
    }
}

module.exports.getUserById = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);

        res.status(200).json({
            status:'success',
            message:"Successfully fetched the data",
            data:user
        }) 

    } catch (error) {
        res.status(400).json({
            status:'Failed',
            message:error.message
        })
    }
}