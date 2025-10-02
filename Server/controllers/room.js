const Room = require('../models/Room');
const createError = require('../utils/error');
const Hotel = require('../models/Hotel');

module.exports.createRoom = async (req, res, next) => {
    const { title, price, maxPeople, description, roomNumbers } = req.body;
    const newRoom = new Room({ title, price, maxPeople, description, roomNumbers });
    const hotel = await Hotel.findById(req.params.hotelId);
    try {
        const savedRoom = await newRoom.save();
        hotel.rooms.push(savedRoom._id);
        await hotel.save();
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
}

module.exports.updateRoom = async (req, res, next) => {
    const { title, price, maxPeople, description, roomNumbers } = req.body;
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { title, price, maxPeople, description, roomNumbers }, { new: true });
        res.status(200).json(updatedRoom);
    } catch (err) {
        next(err);
    }
}

module.exports.deleteRoom = async (req, res, next) => {
    try {
        await Room.findByIdAndDelete(req.params.id);
        await Hotel.findByIdAndUpdate(req.params.hotelId, { $pull: { rooms: req.params.id } });
        res.status(200).json("deletedRoom");
    } catch (err) {
        next(err);
    }
}

module.exports.getOneRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
}

module.exports.getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
}

module.exports.updateRoomAvailability = async (req, res, next) => {
    try {
        await Room.updateOne(
          { "roomNumbers._id": req.params.id },
          {
            $push: {
              "roomNumbers.$.unavailableDates": req.body.dates
            },
          }
        );
        res.status(200).json("Room status has been updated.");
      } catch (err) {
        next(err);
      }
}