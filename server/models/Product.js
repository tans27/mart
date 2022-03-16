const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('product', ProductSchema)