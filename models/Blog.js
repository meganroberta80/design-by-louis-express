const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    blogTitle: {type: String, required : true},
    blogPost: {type: String, required : true}
})

const blog = mongoose.model('Blog', blogSchema)

module.exports = Blog