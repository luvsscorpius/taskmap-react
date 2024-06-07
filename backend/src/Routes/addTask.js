const express = require('express')
const router = express.Router()
const Mongo = require('../db')

router.put('/:user', async (req, res) => {
    try {
        const {userr} = req.params
        const db = await Mongo()
        const userCollection = await db.collection('usuarios').find({}).toArray()
        console.log(userCollection)

        res.send(userr)
        
    } catch(error) {
        console.error(error)
    }
})

module.exports = router