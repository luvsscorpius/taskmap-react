const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')

router.delete('/', (req, res) => {
    res.send('Rota de exclusão de tarefas')
})

module.exports = router