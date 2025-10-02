const User = require('../models/User');

module.exports.updateUser = async(req, res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id ,{$set: req.body}, {new: true})
        res.status(200).json(updatedUser);
    }catch(err){
        next(err);
    }
}

module.exports.deleteUser = async(req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted User");
    }catch(err){
        next(err);
    }
}

module.exports.getOneUser = async(req, res) => {
    try{
        const getOneUser = await User.findById(req.params.id)
        res.status(200).json(getOneUser);
    }catch(err){
        next(err);
    }
}

module.exports.getAllUsers = async(req, res) => {
    try{
        const getAllUsers = await User.find()
        res.status(200).json(getAllUsers);
    }catch(err){
        next(err);
    }
}