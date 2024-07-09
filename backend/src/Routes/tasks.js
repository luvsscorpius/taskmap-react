const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')
const { ObjectId } = require('mongodb')

router.get('/:user', async (req, res) => {
    const usuarioId = JSON.parse(req.params.user)
    console.log(usuarioId)
    console.log('Id do usuário: ', usuarioId._id)

    try {
        const db = await Mongo()
        // Utilizaremos o projection para controlar quais campos serao retornados na consulta
        // Usando dessa forma para procurar apenas as tarefas do id do usuário passado nos parametros
        const collections = await db.collection('usuarios').find({_id: new ObjectId(usuarioId._id)}, {projection: {tasks: 1, name: 1}}).toArray()

        // Testando para ver se realmente é o mesmo Id e se for mando a coleção com as tarefas para o frontend
        const user = collections.map((user) => {
            if (user._id.toString() === usuarioId._id) {
                console.log('True')
                res.send(collections)
                return
            } else {
                console.log('False')
            }
        })
    } catch(error) {
        console.error(error)
    }
})

module.exports = router