import React, {createContext, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const TaskContext = createContext(null)

export const Context = ({children}) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const [tasks, setTasks] = useState([
      ])

    const navigate = useNavigate()

    const handleLogin = async (e) => {
      e.preventDefault()
  
      // Fazer a chamada da api do backend 
      try {
        const response = await axios.post("http://localhost:2000/login", JSON.stringify({email, password}), 
        {
          headers: {'Content-Type': 'application/json'}
        }
        )
  
        setUser(response.data)
        navigate('/taskview')
  
        // Caso der algum erro
      } catch (error) {
        if (!error?.response) {
          setError('Erro ao acessar o servidor')
        } else if (error.response.status === 401) {
          setError('Usuário ou senha invalidos')
        }
      }
    }

    const addTask = async (e, novaTask) => {
      e.preventDefault()
      setTasks([...tasks, novaTask])
      console.log(tasks)

      try {
        await axios.put(`http://localhost:2000/update/${user._id}`, JSON.stringify({email, password}), 
        {
          headers: {'Content-Type': 'application/json'}
        })

        console.log('Deu certo')
      } catch(error) {
        console.error(error)
      }
    }

    const addUser = (nome, email, senha) => {
        setUsers({...users, nome, email, senha})
    }

    console.log(user)

    const contextValue = {addUser, users, setEmail, setPassword, error, handleLogin, user, addTask, tasks, setTasks}
  return (
    <TaskContext.Provider value={contextValue}>
        {children}
    </TaskContext.Provider>
  )
}
