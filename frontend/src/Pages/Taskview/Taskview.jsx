import React, { useContext } from 'react'
import { TaskContext } from '../../Context/Context'

export const Taskview = () => {
    const {user} = useContext(TaskContext)

  return (
    <div>Olá {user.name}</div>
  )
}
