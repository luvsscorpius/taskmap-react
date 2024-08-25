import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../Components/Themes'
import { GlobalStyle } from '../Pages/Home/Styles'
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'

export const TaskContext = createContext(null)

export const Context = ({ children }) => {
  const [user, setUser] = useState(sessionStorage.getItem('@Auth:user'))
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Toggle button
  const [theme, setTheme] = useState('light')

  // Tasks
  const [tasks, setTasks] = useState([])

  // Hide and show password
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(eyeOff)

  // State to manipulate the button Checked input theme
  const [isChecked, setIsChecked] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    // Fazer a chamada da api do backend 
    try {
      const response = await axios.post("http://localhost:2000/login", ({ email, password }))

      if (response.data.error) {
        toast.error(response.data.error)
      } else {

        // Using JSON.stringify to stop error [object object]
        setUser(JSON.stringify(response.data[0]))
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data[0].token}`
        sessionStorage.setItem('@Auth:token', response.data[0].token)
        sessionStorage.setItem('@Auth:user', JSON.stringify(response.data[0]))

        sessionStorage.setItem('tasks', JSON.stringify(response.data[0].tasks))
        const tasks = response.data[0].tasks
        setTasks(tasks)

        navigate('/taskview')

        setTheme(response.data.theme)
      }

      // Caso der algum erro
    } catch (error) {
      if (!error?.response) {
        return toast.error('Erro ao acessar o servidor', {
          position: 'top-right'
        })
      } else if (error.response.status === 401) {
        return toast.error('Usuário ou senha invalidos', {
          position: 'top-right'
        })
      }
    }
  }

  //Usando o useEffect para manter o usuário logado, juntamente com as tarefas desse usuário
  useEffect(() => {
    // Usando uma função assíncrona para receber os dados da requisição
    const fetchData = async (req, res) => {
      try {
        const dataResponse = await axios.get(`http://localhost:2000/tasks/${user}`, {
          headers: { 'Content-Type': 'application/json' }
        })

        // Tarefas encontradas
        const TasksFound = dataResponse.data[0].tasks
        setTasks(TasksFound)
        console.log(TasksFound)

        // Encontrando o nome do usuário
        const userFound = dataResponse.data
        setUser(userFound)

        // Atualizando o tema 
        const themeFound = dataResponse.data[0].theme
        setTheme(themeFound)
        // using this condition to manipulate the theme button
        if (themeFound === 'dark') {
          setIsChecked(true)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()

  }, [])

  const addTask = async (e, novaTask) => {
    e.preventDefault()
    console.log(e)

    try {
      await axios.put(`http://localhost:2000/update/${user._id === undefined ? user[0]._id : user._id}`, novaTask, {
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => {
          if (res.status === 201) {
            setTasks([...tasks, novaTask])
            sessionStorage.setItem('tasks', JSON.stringify(tasks))
            return toast.success('Tarefa Adicionada com Sucesso.')
          }
        })
        .catch(error => {
          return toast.error('Erro:' + error)
        })

      console.log('Tarefa adicionada com sucesso')

    } catch (error) {
      console.error(error)
      return toast.error('Erro:' + error)
    }
  }

  const addUser = async (e, nome, email, senha) => {
    e.preventDefault()

    if (nome === '') {
      toast.warning('Campo nome vazio, insira o nome e tente novamente.', {
        position: 'top-right'
      })
    } else if (email === '') {
      toast.warning('Campo email vazio, insira um email e tente novamente.', {
        position: 'top-right'
      })
    } else if (senha === '') {
      toast.warning('Campo senha vazio, insira uma senha e tente novamente.', {
        position: 'top-right'
      })
    } else {
      // Mandando um array vazio para cada usuário que for criado para não dar erro na hora de ler as supostas tasks que o usuário ainda não tem.
      const user = { name: nome, email: email, password: senha, theme: theme, tasks: [] }
      console.log(user)

      try {
        await axios.post(`http://localhost:2000/createuser`, JSON.stringify(user), {
          headers: { 'Content-Type': 'application/json' }
        })
        toast.success('Usuário cadastrado com sucesso', {
          position: 'top-right'
        })
        navigate('/')
      } catch (error) {
        if (!error?.response) {
          toast.error('Erro ao criar um novo usuário')
        } else if (error.response.status === 409) {
          toast.error('Usuário ja existe.')
        }
      }
    }
  }

  // Função para deletar alguma task
  const deleteTask = async (taskId, userId) => {
    console.log('ID da tarefa: ' + taskId + ' ID do usuário: ' + userId)

    const userInfo = {
      taskId: taskId,
      userId: userId
    }

    console.log(userInfo)

    try {
      await axios.delete(`http://localhost:2000/deleteTask/${JSON.stringify(userInfo)}`, {
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => {
          if (res.status === 200) {
            toast.warning('Tarefa deletada com sucesso')

            // Atualizando no frontend também
            // Utilizamos o filter aqui para varrer o array e verificar se algum elemento tenha o id igual ao que esta vindo nas props
            // se retornar true, continuara, se for false eleminaremos
            setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))

            // Removendo do session storage por conta do useEffect
            const tasksUpdated = tasks.filter(task => task.id !== taskId)
            console.log(tasksUpdated)
            sessionStorage.setItem('tasks', JSON.stringify(tasksUpdated))
          }
        }).catch(error => {
          toast.error('Erro: ', error)
        })

      console.log('Informações enviadas com sucesso.')
    }
    catch (error) {
      console.error(error)
    }
  }

  // Função para trocar o tema do app no front & back
  const updateTheme = async () => {
    // Usando essa condição para ver se existe algum usuário, se não para conseguir mudar o tema mesmo não estando logado.
    if (user === null) {
      setTheme(theme === 'light' ? 'dark' : 'light')
      // using this to manipulate the theme button
      setIsChecked(prevIsChecked => !prevIsChecked)
      toast.success(`Atualizado para o tema ${theme === 'light' ? 'dark' : 'light'}`)
    } else {
      try {
        const userInfo = user[0] || user
        await axios.put(`http://localhost:2000/updateTheme/${user._id === undefined ? user[0]._id : user._id}`, user === undefined ? userInfo : user, {
          headers: { 'Content-Type': 'application/json' }
        })
          .then(res => {
            console.log(res.status)
            if (res.status === 200) {
              setTheme(theme === 'light' ? 'dark' : 'light')
              // using this to manipulate the theme button
              setIsChecked(prevIsChecked => !prevIsChecked)
              toast.success(`Atualizado para o tema ${theme === 'light' ? 'dark' : 'light'}`)
            }
          }).catch(error => {
            toast.error('Erro: ', error)
          })
      } catch (error) {
        console.error(error)
      }
    }
  }

  const contextValue = { addUser, setEmail, setPassword, handleLogin, user, setUser, addTask, tasks, setTasks, theme, setTheme, Icon, icon, setIcon, eyeOff, eye, type, setType, deleteTask, updateTheme, isChecked, signed: !!user, email, password }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <TaskContext.Provider value={contextValue}>
        {children}
      </TaskContext.Provider>
    </ThemeProvider>
  )
}
