// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const sneakerSchema = new Schema({
    name: { type: String, required: true }, 
    color: { type: String, required: true }, 
    // details: { type: String, required: true },
    quantity: { type: Number, required: true},
    isUsed: Boolean,
    imgUrl: { type: String, required: true}
    
})

// create a Model from our Schema
const sneaker = mongoose.model('sneaker', sneakerSchema)

// export our Model
module.exports = sneaker;