const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')

router.put('/:user', async (req, res) => {
    try {
        const {user} = req.params
        console.log(user)
    } catch (error) {
        console.error(error)
    }
})