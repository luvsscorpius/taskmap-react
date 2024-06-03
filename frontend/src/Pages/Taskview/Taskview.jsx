import React, { useContext, useState } from 'react'
import { TaskContext } from '../../Context/Context'
import * as T from './Styles'
import {Trash, Pencil} from 'phosphor-react'

export const Taskview = () => {
    const {user} = useContext(TaskContext)

    const [tasks, setTasks] = useState([{id: 0, taskName: 'Estudar React'}, {id: 1, taskName: 'Estudar Java'}])

  return (
    <T.component>
      <T.contents>
        <T.title> <h2>TODO LIST</h2>
          <p>Olá {user.name}! Seja bem-vindo(a) de volta!</p>
        </T.title>

        <T.inputsContent>
          <button>Add Task</button>
          <input type="text" />
          
        </T.inputsContent>

        <T.tasksContent>
            {tasks.map((task) => (
              <T.task>
                <T.taskInfo>
                  <input type="checkbox" id="check" />
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
