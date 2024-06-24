const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')
const { ObjectId } = require('mongodb')

router.put('/:user', async (req, res) => {
    try {
        const {user} = req.params
        const userId = new ObjectId(user)
    
        const novaTarefa = req.body

        const db = await Mongo();
        await db.collection('usuarios').updateOne({_id: userId}, {$push: { tasks: novaTarefa }}); // Adicionando a nova tarefa à lista de tarefas do usuário

        console.log('Tarefa adicionada com sucesso')

        res.status(201)

        res.send(user)
        
    } catch(error) {
        console.error(error)
    }
})

module.exports = router