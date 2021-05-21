const mongoose = require('mongoose');

//const { Schema } = mongoose;
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    // _id: {
    //     type: Object,
    //     required: true
    // },
    
    img_url: {
        type: String,
        required: true
    },
    img_url2: {
        type: String,
        required: true
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    category: {
        type: Number,
        required: true
    },
    url_video: {
        type: String,
        required: true
    },
}, { timestamps: true })

const dataItem = mongoose.model('yogapositions', dataSchema)

module.exports = dataItem