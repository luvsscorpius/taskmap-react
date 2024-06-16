const express = require('express')
const router = express.Router()
const Mongo = require('../config/db')

// Rota de login
router.post('/', async (req, res) => {
    try {
        // Pegamos oque vem da requição
        const {email, password} = req.body
        console.log(email, password)

        // Buscamos no banco de dados os usuários
        const db = await Mongo()
        const collection = await db.collection('usuarios').find({}).toArray()

        // Lógica para ver se o mesmo email e senha existem no banco de dados
        const user = collection.find(user => user.email === email && user.password === password)
        // Se sim retornamos um status 200 de ok e um json com o usuário
        if (user) {
            return res.status(200).json(user)
        } else if (user) {
            return res.status(401)
        }
    
    } catch (error) {
        console.error(error)
         // Caso contrário retornaremos um status 401
         return res.status(401)
    }
})

module.exports = router