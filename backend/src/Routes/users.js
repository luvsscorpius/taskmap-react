const express = require('express')
const router = express.Router()
const Mongo = require('../db.js')

// Rota dos usuários
router.get('/', async (req, res) => {
    try {
        const users = await Mongo()
        console.log(users)
        res.json(users)
    } catch (error) {
        res.status(401).json({message: 'Erro'})
    }
})

module.exports = router