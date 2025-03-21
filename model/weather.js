const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    city: {
        type: String,
        required:true
    },
    temperature: {
        type: Number,
        required:true
    },
    wind_speed: {
        type: Number,
        required:true
    },
    condition: {
        type: String,
        required:true
    },
   
},{timestamps:true})
const weatherModel = mongoose.model('Transaction',weatherSchema)

module.exports = weatherModel;