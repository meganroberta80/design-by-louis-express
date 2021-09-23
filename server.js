const express = require('express')
const cors = require('cors')
const projectController = require('./controllers/projectController')
const blogController = require('./controllers/blogController')

const port = process.env.PORT || 4000
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use('/projects', projectController)
app.use('/blog', blogController)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
