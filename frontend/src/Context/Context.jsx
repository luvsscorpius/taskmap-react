import React, {createContext, useState} from 'react'

export const TaskContext = createContext(null)

export const Context = ({children}) => {
    const [users, setUsers] = useState([])

    const addUser = (nome, email, senha) => {
        setUsers({...users, nome, email, senha})
    }

    console.log(users)

    const contextValue = {addUser, users}
  return (
    <TaskContext.Provider value={contextValue}>
        {children}
    </TaskContext.Provider>
  )
}
