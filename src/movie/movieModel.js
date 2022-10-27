const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true, 
        unique: true
    },
    actor: {
        type: String,
        required: false,
    }
})

const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;