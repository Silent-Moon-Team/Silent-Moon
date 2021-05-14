const mongoose = require('mongoose');

//const { Schema } = mongoose;
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    img_url: {
        type: String,
        required: true
    },
    url_video: {
        type: String,
        required: true
    },
    title: {
        type: String,
        require: true,
    },
    level: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

const dataItem = mongoose.model('yogapositions', dataSchema)

module.exports = dataItem