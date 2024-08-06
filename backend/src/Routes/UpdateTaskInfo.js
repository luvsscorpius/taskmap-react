const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')
const { ObjectId } = require('mongodb')

router.put('/:user', async (req, res) => {
    try {
        const {user} = req.params
        const userTaskInfo = req.body
        console.log(user, userTaskInfo)
        const userID = new ObjectId(user)

        const db = await Mongo()
        await db.collection('usuarios').updateOne(
            {_id: userID, 'tasks.id': userTaskInfo.id},
            {$set: {'tasks.$': userTaskInfo}}
        )
        console.log('Tarefa atualizada com sucesso')
        res.status(201)
        res.send(userTaskInfo)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router