const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')
const { ObjectId } = require('mongodb')

router.put('/:user', async (req, res) => {
    try {
        console.log('Rota de atualização de tema')
        // Aqui verificamos se o parametro está vindo como um array, caso esteja transformamos ele em um objeto caso contrário não faremos nada
        const user = Array.isArray(req.body) ? req.body[0] : req.body;
        const userId = new ObjectId(user._id)
        console.log(user)

        const db = await Mongo()
        await db.collection('usuarios').updateOne(
            {_id: userId}, 
            {$set: {'theme': user.theme === 'light' ? 'dark' : 'light'}}
        )
        console.log('Tema atualizado com sucesso')
        res.status(200).send('Tema atualizado com sucesso')
    } catch (error) {
        console.error(error)
    }
})

module.exports = router