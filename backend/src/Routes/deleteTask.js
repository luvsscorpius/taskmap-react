const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')
const { ObjectId } = require('mongodb')

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const userInfo = JSON.parse(id)
    res.send('Rota de exclusão de tarefas')
    console.log(userInfo)

    const userId = new ObjectId(userInfo.userId)

    try {
        const db = await Mongo()
        const findUser = await db.collection('usuarios').findOne({_id: userId}, {projection: {tasks: 1}})

        const findTask = findUser.tasks.find(id => id.id === userInfo.taskId)
        console.log(findTask)

        // Se a tarefa for encontrada, então usaremos o updateOne para atualizarmos o objeto e utilizaremos o $pull para remover apenas um objeto
        // pq não o deleteOne? pois o deleteOne deleta o documento to, ps: por isso estava deletando os usuários.
        if (findTask) {
            await await db.collection('usuarios').updateOne(
                {_id: userId},
                {$pull: {tasks: findTask}}
            )
            console.log('Tarefa deletada com sucesso')
            res.status(200)
        } else {
            console.log('erro')
        }

    } catch (error) {
        console.error(error)
    }
})

module.exports = router