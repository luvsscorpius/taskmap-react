const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')

router.get('/', async (req, res) => {
    try {
        const db = await Mongo()
        // Utilizaremos o projection para controlar quais campos serao retornados na consulta
        const collection = await db.collection('usuarios').find({}, {projection: {tasks: 1, _id: 0}}).toArray()
        console.log(collection)
        res.send(collection)
    } catch(error) {
        console.error(error)
    }
})

module.exports = router