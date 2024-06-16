const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')

router.post('/', async (req, res) => {
    // Pegaremos o corpo da requisição com as informações do usuário
    const userInfo = req.body
    console.log(userInfo)

    try {
        const db = await Mongo()
        const existingUser = await db.collection('usuarios').findOne({email: userInfo.email})
        console.log(existingUser)
        
        if (existingUser) {
            console.log('Usuário ja existe no banco de dados')
            return res.status(409).send('Usuário já existe')
        } 

            const collection = await db.collection('usuarios').insertOne(userInfo)
            if (collection) {
                console.log('Usuário adicionado com sucesso')
                res.status(201).send('Usuário adicionado com sucesso')
            } else {
                console.error('Erro')
                res.status(500).send('Erro ao adicionar usuário')
            }   

    } catch (error) {
        console.error('Erro ao acessar o banco de dados:', error);
        res.status(500).send('Erro interno ao acessar o banco de dados');
    }
})

module.exports = router