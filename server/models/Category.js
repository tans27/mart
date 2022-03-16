const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    url:{
        type: String,
    },
    code:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('category', CategorySchema)
