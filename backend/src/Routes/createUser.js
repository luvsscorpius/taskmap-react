const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')

router.post('/', async (req, res) => {
    // Pegaremos o corpo da requisição com as informações do usuário
    const userInfo = req.body
    console.log(userInfo)

    const db = await Mongo()
    const collection = await db.collection('usuarios').insertOne(userInfo)
    if (collection) {
        console.log('Usuário adicionado com sucesso')
    } else {
        console.error('Erro')
    }
    res.send('Create user route')
})

module.exports = router