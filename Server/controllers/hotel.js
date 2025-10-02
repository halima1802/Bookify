const Hotel = require('../models/Hotel');
const Room = require('../models/Room');

module.exports.createHotel = async(req, res) => {
    const newHotel = new Hotel(req.body);
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        next(err);
    }
}

module.exports.updateHotel = async(req, res) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id ,{$set: req.body}, {new: true})
        res.status(200).json(updatedHotel);
    }catch(err){
        next(err);
    }
}

module.exports.deleteHotel = async(req, res) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted Hotel");
    }catch(err){
        next(err);
    }
}

module.exports.getOneHotel = async(req, res) => {
    try{
        const getOneHotel = await Hotel.findById(req.params.id)
        res.status(200).json(getOneHotel);
    }catch(err){
        next(err);
    }
}

module.exports.getAllHotels = async(req, res) => {
    const {limit,min,max,...others} = req.query;
    try{
        const getAllHotels = await Hotel.find({...others,
        cheapestPrice:{$gt:min || 0, $lt:max || 150000000}}).limit(limit)
        res.status(200).json(getAllHotels);
    }catch(err){
        next(err);
    }
}

module.exports.getHotelCountByCity = async(req, res) => {
    const cities = req.query.cities.split(',');
    try{
        const list = await Promise.all(cities.map(async(city) => {
            return Hotel.countDocuments({city: city})
        }))
        res.status(200).json(list);
    }catch(err){
        next(err);
    }
}

module.exports.getHotelCountByType = async(req, res, next) => {
    
    try{
        const hotelCount = await Hotel.countDocuments({type: "Hotel" })
        const apartmentCount = await Hotel.countDocuments({type: "apartment" })
        const resortCount = await Hotel.countDocuments({type: "resort" })
        const villaCount = await Hotel.countDocuments({type: "villa" })
        const cabinCount = await Hotel.countDocuments({type: "cabin" })

        res.status(200).json([
            {type: "Hotel", count: hotelCount},
            {type: "Apartment", count: apartmentCount},
            {type: "Resort", count: resortCount},
            {type: "Villa", count: villaCount},
            {type: "Cabin", count: cabinCount}
        ]);
        
    }catch(err){
        next(err);
    }
}

module.exports.getHotelRooms = async(req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(
          hotel.rooms.map((room) => {
            return Room.findById(room);
          })
        );
        res.status(200).json(list)
      } catch (err) {
        next(err);
      }

}

