const mongoose = require('mongoose')

const Schema = mongoose.Schema

const genreSchema = new Schema({
name:{type: String}


})

genreSchema.virtual("url").get(function(){
    return `catalog/genre/${this.id}`
})

module.exports = mongoose.model("genre", genreSchema)