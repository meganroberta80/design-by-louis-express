const router = require('express').Router()
const db = require('../models')

// *** Test object
const newProject = {
    projectName: 'House Renovation in New Hampshire',
    projectImg: ''
}

// *** Index Route
router.get('/', (req, res) => {
    db.Project.find({}, (err, foundProjects) => {
        if (err) return console.log(err)
        res.json(foundProjects)
    })
})

// *** Create Route
router.post('/', (req, res) => {
    console.log("Testing")
    console.log(req.body)
    db.Project.create(req.body, (err, createdProject) => {
        if (err) {
            console.log(err)
        } else {
            res.json(createdProject)
        }
    })
})

// *** Delete Route
router.delete('/:id', (req, res) => {
    db.Project.findByIdAndDelete(req.params.id, (err, deletedProject) => {
      if (err) return console.log(err);
  
      res.json({ message: "Successfully deleted a Project" })
    })
  })

module.exports = router