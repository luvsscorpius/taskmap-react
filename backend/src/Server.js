// Criando o servidor
const express = require('express')
const cors = require('cors')
require('./db')
const app = express()

app.use(express.json())
app.use(cors())

// Importando as rotas
const indexRouter = require('./Routes/index')
const usersRouter = require('./Routes/users')
const loginRouter = require('./Routes/login')

// Usando as rotas
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/login', loginRouter)

app.listen(2000, () => console.log('Ouvindo na porta 2000'))