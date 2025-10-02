const express = require('express');
const router = express.Router();
const { verifyAdmin } = require('../utils/verifyToken');
const { updateRoom, createRoom ,deleteRoom,getOneRoom,getAllRooms,updateRoomAvailability } = require('../controllers/room');

//Create Room
router.post('/:hotelId', verifyAdmin , createRoom);
//Update Room
router.put("/availability/:id", updateRoomAvailability);
router.put('/:id', verifyAdmin ,  updateRoom);
//Delete Room
router.delete('/:hotelId/:id', verifyAdmin , deleteRoom);
//Get Room
router.get('/:id', getOneRoom);
//Get All Rooms
router.get('/', getAllRooms);


module.exports = router;