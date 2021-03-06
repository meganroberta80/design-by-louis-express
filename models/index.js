const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost:27017/designdb'

mongoose.connect(connectionString, { 
	useNewUrlParser: true,
	useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`)
})

module.exports = {
    Project: require('./Project'),
    Blog: require('./Blog')
  }