const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    title :{
        type:String,
        required:true
    },
    price :{
        type:Number,
        required:true,
        min:0
    },
    maxPeople :{
        type:Number,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    roomNumbers : [{number:Number,unavailableDates:{type: [Date] }}]
});
module.exports = mongoose.model('Room', roomSchema);
    
