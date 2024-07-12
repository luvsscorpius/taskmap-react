const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')
const {ObjectId} = require('mongodb') 

router.put('/:user', async (req, res) => {
    try {
        const updatedTask = req.body
        const {user} = req.params
        const userId = new ObjectId(user)
        console.log(userId)

        const db = await Mongo()
        await db.collection('usuarios').updateOne(
            // Aqui usaremos os filtros o id do usuario logado e o id da task que foi passada no corpo da requisição para encontrarmos a tarefa especifica para atualizarmos
            {_id: userId, 'tasks.id': updatedTask.id}, 
            // Aqui utilizaremos tasks.$ para indicar para o mongo qual elemento do array deve ser atualizado no caso o elemento que veio da requisição.
            {$set: {'tasks.$': updatedTask } })
        console.log(`Tarefa ${updatedTask.id} atualizada com sucesso`)

        res.send(updatedTask)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router