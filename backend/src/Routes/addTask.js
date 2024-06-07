const express = require('express')
const router = express.Router()
const Mongo = require('../db')
const { ObjectId } = require('mongodb')

router.put('/:user', async (req, res) => {
    try {
        const {user} = req.params
        const userId = new ObjectId(user)
    
        const db = await Mongo()
        // Usaremos o $push aqui pois ele é um operador que é usado para adicionar elementos em um array
        await db.collection('usuarios').updateOne({_id: userId}, {$push: {tasks: {id: 2, taskName: 'Estudar Java', isChecked: false}} })

        console.log('Tarefa adicionada com sucesso')

        res.send(user)
        
    } catch(error) {
        console.error(error)
    }
})

module.exports = router