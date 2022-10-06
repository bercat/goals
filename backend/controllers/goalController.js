const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// Get goals 
// GET /api/goals
// Private 
const { Console } = require("console")

const getGoals = asyncHandler( async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })


    res.status(200).json(goals)
})

// Set goals 
// POST /api/goals
// Private 

const setGoal = asyncHandler( async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error(`please add a text field`)
    }

    const goal = await Goal.create({ 
        text: req.body.text, 
        user: req.user.id,
    })

    res.status(200).json(goal)
})

// Update goals 
// PUT /api/goals/:id
// Private 

const updateGoal = asyncHandler( async (req, res) => {
    //get the goal we are going to update
    const goal = await Goal.findById(req.params.id) 

    //make sure we have it
    if (!goal) {
        res.status(400)
        throw new Error(`Goal not found`)
    }

    const user = await User.findById(req.user.id)

     // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }


    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})

// Delete goals 
// DELETE /api/goals/:id
// Private 

const deleteGoal = asyncHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id) 

    
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

     // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await goal.remove()

    res.status(200).json({ id: req.params.id })

})

module.exports = { 
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}

