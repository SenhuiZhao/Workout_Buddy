const e = require('express')
const express = require('express')

const router = express.Router()


// GET ALL WORKOUTS
router.get('/', (req, res) => {
    res.json({mssg: 'GET ALL WORKOUTS'})
})

// GET A SINGLE WORKOUT
router.get('/:id', (req, res) => {
    res.json({masg: 'GET A SIGNLE WORKOUT'})
})

// POST A NEW WORKOUT
router.post('/', (req, res) => {
    res.json({mssg: 'POST A NEW WORKOUT'})
})

// DELETE A WORKOUT
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE A NEW WORKOUT'})
})

//UPDATE A WORKOUT
router.patch('/:id', (req, res) =>{
    res.json({mssg: 'UPDATE A WORKOUT'})
})


module.exports = router