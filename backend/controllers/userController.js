const User = require('../models/User.model.js');

let users = []; // for in-memory storage
const { isDBConnected } = require('../config/db.js');


// 1. create user route method
// 2. get user route method

const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
    }
    catch (error){
        res.status(400).json({message: error.message});
    }
};


const getUsers = async(req, res) =>{
    try{
        const users = await User.find();
        res.json(users);
    }
    catch (error){
        res.status(400).json({message: error.message});
    }
};


module.exports = {createUser, getUsers};
