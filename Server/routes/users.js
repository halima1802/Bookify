const express = require('express');
const router = express.Router();
const { verifyUser , verifyAdmin } = require('../utils/verifyToken');
const { updateUser, deleteUser, getOneUser, getAllUsers } = require('../controllers/user');



//Update User
router.put('/:id', verifyUser, updateUser);
//Delete User
router.delete('/:id', verifyUser, deleteUser);
//Get User
router.get('/:id', verifyUser, getOneUser);
//Get All Users
router.get('/', verifyAdmin, getAllUsers);


module.exports = router;