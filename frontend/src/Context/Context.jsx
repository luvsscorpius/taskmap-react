import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const TaskContext = createContext(null)

export const Context = ({children}) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(sessionStorage.getItem('user'))
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

        // Aqui usaremos denovo o axios para consultar as tasks desse usuário
        const res = await axios.get("http://localhost:2000/tasks",
        {
          headers: {'Content-Type': 'application/json'}
        })

        sessionStorage.setItem('tasks', JSON.stringify(res.data[0].tasks))
        const tasks = res.data[0].tasks
        setTasks(tasks)
  
        sessionStorage.setItem('user', JSON.stringify(response.data))
        console.log(response.data)
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

    // Usando o useEffect para manter o usuário logado, juntamente com as tarefas desse usuário
    useEffect(() => {
      // Usando a mesma função para manter a página atualizada caso adicione uma tarefa e atualize a página, ele busque novamente na API.
      const fetchData = async () => {
          // Fazer a chamada da api do backend 
        try {

          // Aqui usaremos denovo o axios para consultar as tasks desse usuário
          const res = await axios.get("http://localhost:2000/tasks",
          {
            headers: {'Content-Type': 'application/json'}
          })

          sessionStorage.setItem('tasks', JSON.stringify(res.data[0].tasks))
          const tasks = res.data[0].tasks
          console.log(tasks)
          setTasks(tasks)
  
          // Caso der algum erro
          } catch (error) {
          if (!error?.response) {
            setError('Erro ao acessar o servidor')
          } else if (error.response.status === 401) {
            setError('Usuário ou senha invalidos')
          }
        }
      }

      fetchData()

      const loggedInUser = sessionStorage.getItem('user')
      const tasks = sessionStorage.getItem('tasks')
      if (loggedInUser && tasks) {
        const foundUser = JSON.parse(loggedInUser)
        const foundTasks = JSON.parse(tasks)
        setUser(foundUser)
        setTasks(foundTasks)
      }
    }, [])

    console.log(tasks)

    const addTask = async (e, novaTask) => {
      e.preventDefault()
      setTasks([...tasks, novaTask])
      console.log(tasks)
      console.log(novaTask)

      try {
        await axios.put(`http://localhost:2000/update/${user._id}`, novaTask, {
          headers: {'Content-Type': 'application/json'}
        });
        

        console.log('Deu certo')
      } catch(error) {
        console.error(error)
      }
    }

    const addUser = (nome, email, senha) => {
        setUsers({...users, nome, email, senha})
    }

    const contextValue = {addUser, users, setEmail, setPassword, error, handleLogin, user, addTask, tasks, setTasks}
  return (
    <TaskContext.Provider value={contextValue}>
        {children}
    </TaskContext.Provider>
  )
}
