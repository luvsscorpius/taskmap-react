const express = require('express')
const router = express.Router()
const Mongo = require('../db.js')

// Rota dos usuários
router.get('/', async (req, res) => {
    try {
        const db = await Mongo()
        const collection = await db.collection('usuarios').find({}).toArray()
        console.log(collection)
        res.json(collection)
    } catch (error) {
        res.status(401).json({message: 'Erro'})
    }
})

module.exports = router