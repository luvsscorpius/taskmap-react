import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../Components/Themes'
import { GlobalStyle } from '../Pages/Home/Styles'
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

export const TaskContext = createContext(null)

export const Context = ({children}) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(sessionStorage.getItem('user'))
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // Toggle button
    const [theme, setTheme] = useState('light')

    const [tasks, setTasks] = useState([])

    // Hide and show password
    const [type, setType] = useState('password')
    const [icon, setIcon] = useState(eyeOff)

    const navigate = useNavigate()

    const handleLogin = async (e) => {
      e.preventDefault()
  
      // Fazer a chamada da api do backend 
      try {
        const token = 'valid-token'
        const response = await axios.post("http://localhost:2000/login", JSON.stringify({email, password}), 
        {
          headers: {
            'Content-Type': 'application/json', 'Authorization': `${token}`}
        }
        )

        // Aqui usaremos denovo o axios para consultar as tasks desse usuário
        const res = await axios.get(`http://localhost:2000/tasks/${JSON.stringify(response.data)}`,
        {
          headers: {'Content-Type': 'application/json'}
        })

        console.log(res)

        sessionStorage.setItem('tasks', JSON.stringify(res.data[0].tasks))
        const tasks = res.data[0].tasks
        setTasks(tasks)
  
        sessionStorage.setItem('user', JSON.stringify(response.data))
        setUser(response.data)
        console.log(response.data)
        navigate('/taskview')
  
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

    // Usando o useEffect para manter o usuário logado, juntamente com as tarefas desse usuário
    // useEffect(() => {
    //   // Usando a mesma função para manter a página atualizada caso adicione uma tarefa e atualize a página, ele busque novamente na API.
    //   const fetchData = async () => {
    //       // Fazer a chamada da api do backend 
    //     try {

    //       // Aqui usaremos denovo o axios para consultar as tasks desse usuário
    //       const res = await axios.get("http://localhost:2000/tasks",
    //       {
    //         headers: {'Content-Type': 'application/json'}
    //       })

    //       sessionStorage.setItem('tasks', JSON.stringify(res.data[0].tasks))
    //       const tasks = res.data[0].tasks
    //       setTasks(tasks)
  
    //       // Caso der algum erro
    //       } catch (error) {
    //         console.error(error)
    //     }
    //   }

    //   fetchData()

    //   const loggedInUser = sessionStorage.getItem('user')
    //   const tasks = sessionStorage.getItem('tasks')
    //   if (loggedInUser && tasks) {
    //     const foundUser = JSON.parse(loggedInUser)
    //     const foundTasks = JSON.parse(tasks)
    //     setUser(foundUser)
    //     setTasks(foundTasks)
    //   }
    // }, [])

    const addTask = async (e, novaTask) => {
      e.preventDefault()
      setTasks([...tasks, novaTask])

      try {
        await axios.put(`http://localhost:2000/update/${user._id}`, novaTask, {
          headers: {'Content-Type': 'application/json'}
        })
          .then(res => {
            if (res.status === 201) {
              return toast.success('Tarefa Adicionada com Sucesso.')
            }
          }) 
          .catch(error => {
            return toast.error('Erro:' + error)
          })

        console.log('Tarefa adicionada com sucesso')
        
      } catch(error) {
        console.error(error)
        return toast.error('Erro:' + error)
      }
    }

    const addUser = async (e, nome, email, senha) => {
      e.preventDefault()

      // Mandando um array vazio para cada usuário que for criado para não dar erro na hora de ler as supostas tasks que o usuário ainda não tem.
      const user = {name: nome, email: email, password: senha, tasks: []}
      console.log(user)

      try {
      await axios.post(`http://localhost:2000/createuser`, JSON.stringify(user), {
          headers: {'Content-Type': 'application/json'}
        })
        toast.success('Usuário criado com sucesso', {
          position: 'top-right'
        })
      } catch (error) {
        if (!error?.response) {
          toast.error('Erro ao criar um novo usuário')
        } else if (error.response.status === 409) {
          toast.error('Usuário ja existe.')
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
        await axios.delete(`http://localhost:2000/deleteTask/${JSON.stringify(userInfo)}`,  {
          headers: {'Content-Type': 'application/json'}
        })

        console.log('Informações enviadas com sucesso.')
      }
      catch (error) {
        console.error(error)
      }
    }

    const contextValue = {addUser, users, setEmail, setPassword, handleLogin, user, addTask, tasks, setTasks, theme, setTheme, Icon, icon, setIcon, eyeOff, eye, type, setType, deleteTask}
    
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle/>
      <TaskContext.Provider value={contextValue}>
        {children}
      </TaskContext.Provider>
    </ThemeProvider>
  )
}
