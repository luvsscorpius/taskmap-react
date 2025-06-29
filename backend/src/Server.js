// Criando o servidor
const express = require('express')
const cors = require('cors')
require('./config/db')
const app = express()

app.use(express.json())
app.use(cors())

// Importando as middlewares
const logger = require('./Middlewares/Log.middleware')
const auth = require('./Middlewares/auth.middleware')

// Usando as middlewares
app.use(logger)

// Importando as rotas
const indexRouter = require('./Routes/index')
const usersRouter = require('./Routes/users')
const loginRouter = require('./Routes/login')
const addTask = require('./Routes/addTask')
const tasks = require('./Routes/tasks')
const updateTasks = require('./Routes/updateTask')
const createUser = require('./Routes/createUser')
const deleteTask = require('./Routes/deleteTask')
const updateTheme = require('./Routes/updateTheme')
const updateTaskInfo = require('./Routes/UpdateTaskInfo')

// Usando as rotas
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/addTask/', auth,  addTask)
app.use('/tasks', auth,  tasks)
app.use('/updateTasks', auth, updateTasks)
app.use('/createUser', createUser)
app.use('/deleteTask', auth, deleteTask)
app.use('/updateTheme', auth, updateTheme)
app.use('/updateTasksInfo', auth, updateTaskInfo)

app.listen(2000, () => console.log('Ouvindo na porta 2000'))