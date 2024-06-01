// Criando o servidor
const express = require('express')
const routes = require('./Routes')
const app = express()

app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(2000, () => console.log('Ouvindo na porta 2000'))