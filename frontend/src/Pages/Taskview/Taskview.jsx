import React, { useContext, useState } from 'react'
import { TaskContext } from '../../Context/Context'
import * as T from './Styles'
import {Trash, Pencil} from 'phosphor-react'
import axios from 'axios'

export const Taskview = () => {
    const {user, addTask, tasks, setTasks} = useContext(TaskContext)
    const [novaTarefa, setNovaTarefa] = useState([])
    
    const handleCheck = (index, isChecked, taskId) => {
      console.log(index, isChecked, taskId)

      const locatedIndex = tasks.find(task => task.id === taskId)
      if (locatedIndex) {
        locatedIndex.isChecked = !isChecked

        // O map aqui foi usado para criar um array atualizado
        const updatedTasks = tasks.map(task => 
          task.id === taskId ? locatedIndex : task
        )

        setTasks(updatedTasks)
      }
    }

    const taske = (task) => {
      setNovaTarefa({id: tasks.length + 1, taskName: task, isChecked: false})
    }

  return (
    <T.component>
      <T.contents>
        <T.title> <h2>TODO LIST</h2>
          <p>Olá {user.name}! Seja bem-vindo(a) de volta!</p>
        </T.title>

        <T.inputsContent>
          <button onClick={(e) => addTask(e, novaTarefa)}>Add Task</button>
          <input type="text" onChange={(e) => taske(e.target.value)} />
        </T.inputsContent>

        <T.tasksContent>
            {tasks.map((task) => (
              <T.task key={task.id}>
                <T.taskInfo>
                  <input type="checkbox" id="check" checked={task.isChecked} onChange={(index)=> handleCheck(index, task.isChecked, task.id)}  />
                  <p>{task.id}</p> -
                  <p>{task.taskName}</p>
                </T.taskInfo>
                
                <T.taskBtn>
                  <button><Trash size={22}/></button>
                  <button><Pencil size={22}/></button>
                </T.taskBtn>
              </T.task>
            ))}
        </T.tasksContent>
      
      </T.contents>
    </T.component>
  )
}
