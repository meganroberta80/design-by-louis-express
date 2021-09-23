const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new mongoose.Schema({
    projectTitle: String,
    projectImg: String
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project