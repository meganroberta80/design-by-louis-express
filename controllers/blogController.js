const router = require('express').Router()
const db = require('../models')

// *** Test object
const newBlog = {
    blogTitle: 'How to Replace a Showerhead',
    blogPost: 'Step One: Remove the old showerhead by turning it counter-clockwise.'
}

// *** Index Route
router.get('/', (req, res) => {
    db.Blog.find({}, (err, foundBlog) => {
        if (err) return console.log(err)
        res.json(foundBlog)
    })
})

// *** Create Route
router.post('/', (req, res) => {
    console.log("Testing blog create")
    console.log(req.body)
    db.Blog.create(req.body, (err, createdBlog) => {
        if (err) {
            console.log(err)
        } else {
            res.json(createdBlog)
        }
    })
})

// *** Delete Route
router.delete('/:id', (req, res) => {
    db.Blog.findByIdAndDelete(req.params.id, (err, deletedBlog) => {
      if (err) return console.log(err);
  
      res.json({ message: "Successfully deleted a Blog" })
    })
  })

module.exports = router