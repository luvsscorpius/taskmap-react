import React, { useContext, useState } from 'react'
import { TaskContext } from '../../Context/Context'
import * as T from './Styles'
import {Trash, Pencil, CaretLeft, CaretRight} from 'phosphor-react'
import axios from 'axios'
import { toast } from 'react-toastify'
import ReactPaginate from 'react-paginate'
import { MyModal } from '../../Components/Modal/Modal'

export const Taskview = () => {
    const {user, addTask, tasks, setTasks, deleteTask} = useContext(TaskContext)
    const [novaTarefa, setNovaTarefa] = useState([])

    // Paginação
    // State para controlar a paginação
    const [currentPage, setCurrentPage] = useState(0)
    // Itens por página
    const itemsPerPage = 4

    // Função para mudar a páginação
    const handlePageClick = ({selected}) => {
      setCurrentPage(selected)
    }

    //Modal
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    // O offset é um indice que aponta para o primeiro elemento que deve ser exibido na página atual. Ele é calculado multiplicando o número da página atual pelo numero de itens da página por exemplo na primeira pagina so teram 10 itens e a próxima página começara pelo item 11.
    const offset = currentPage * itemsPerPage;
    //currentPageData é um novo array que contém os dados a serem exibidos na página atual.
    const currentPageData = tasks.slice(offset, offset + itemsPerPage)
    
    const handleCheck = async (index, isChecked, taskId) => {
      console.log(index, isChecked, taskId)
      console.log(user)

      const locatedIndex = tasks.find(task => task.id === taskId)
      if (locatedIndex) {
        locatedIndex.isChecked = !isChecked

        try {
          await axios.put(`http://localhost:2000/updateTasks/${user._id === undefined ? user[0]._id : user._id}`, locatedIndex, {
            headers: {'Content-Type': 'application/json'}
          });

          toast.success('Tarefa atualizada com sucesso.')
  
          console.log('Deu certo')
        } catch(error) {
          console.error(error)
        }
      
      // Atualizando o array tasks com a nova propriedade de isChecked
      setTasks(tasks.map(task => task.id === taskId ? locatedIndex : task));
      // Depois de atualizar o array locamente, atualizaremos na sessão para caso o usuário atualize a página, ele não perca os dados e os recupere.
      const test = tasks.map(task => task.id === taskId ? locatedIndex : task)
      sessionStorage.setItem('tasks', JSON.stringify(test))
      }
    }

    const taske = (task) => {
      if (tasks !== undefined) {
        setNovaTarefa({id: tasks.length + 1, taskName: task, isChecked: false})
      }
    }

  return (
    <T.component>
      <T.contents>
        <T.title> <h2>TODO LIST</h2>
          <p>Olá {user.name || user[0].name}! Seja bem-vindo(a) de volta!</p>
        </T.title>

        <T.inputsContent>
          <button onClick={(e) => addTask(e, novaTarefa)}>Add Task</button>
          <input type="text" onChange={(e) => taske(e.target.value)} />
        </T.inputsContent>

        <T.tasksContent>

            {tasks === undefined ? 'Não há tarefas' : currentPageData.map(task => (
              <T.task key={task.id}>
                  <T.taskInfo>
                      <input type="checkbox" checked={task.isChecked} onChange={() => handleCheck(task.id, task.isChecked, task.id)} />
                      <span className='slider'></span>
                      <p className={task.isChecked ? 'strikethrough' : ''}>{task.taskName}</p>
                  </T.taskInfo>
                
                <T.taskBtn>
                  <button onClick={() => deleteTask(task.id, user._id === undefined ? user[0]._id : user._id)}><Trash size={22}/></button>
                  <button onClick={handleShow} ><Pencil size={22}/></button>
                </T.taskBtn>
              </T.task>
            ))}

            <ReactPaginate
              previousLabel={<CaretLeft/>}
              nextLabel={<CaretRight/>}
              breakLabel={'...'}
              pageCount={Math.ceil(tasks.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'paginate'}
              activeClassName={'active'} // Classe para quando o item for clicado
              pageClassName={'page-item'} // Classe para cada item de página
            />
        </T.tasksContent>
      </T.contents>

      <MyModal show={show} handleClose={handleClose}/>
    </T.component>
  )
}
