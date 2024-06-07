const express = require('express')
const router = express.Router()

router.put('/', (req, res) => {
    res.send('Rota de atualização')
})

module.exports = router