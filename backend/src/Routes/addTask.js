const express = require('express')
const router = express.Router()
const Mongo = require('../db')
const { ObjectId } = require('mongodb')

router.put('/:user', async (req, res) => {
    try {
        const {user} = req.params
        const userId = new ObjectId(user)

        // acessando o corpo da requisição
        const novaTask = req.body
        console.log(novaTask)
    
        const db = await Mongo()
        // Usaremos o $push aqui pois ele é um operador que é usado para adicionar elementos em um array
        await db.collection('usuarios').updateOne({_id: userId}, {$push: {tasks: novaTask} })

        console.log('Tarefa adicionada com sucesso')

        res.send(user)
        
    } catch(error) {
        console.error(error)
    }
})

module.exports = router