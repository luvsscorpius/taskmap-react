import React, { useContext, useRef, useState } from 'react'
import { TaskContext } from '../../Context/Context'
import * as T from './Styles'
import { Trash, Pencil, CaretLeft, CaretRight } from 'phosphor-react'
import axios from 'axios'
import { toast } from 'react-toastify'
import ReactPaginate from 'react-paginate'
import { Header, Navbar } from '../../Components/Header/Header'

export const Taskview = () => {
  const { user, addTask, tasks, setTasks, deleteTask } = useContext(TaskContext)
  const [novaTarefa, setNovaTarefa] = useState([])

  // Paginação
  // State para controlar a paginação
  const [currentPage, setCurrentPage] = useState(0)
  // Itens por página
  const itemsPerPage = 4

  // Função para mudar a páginação
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  // O offset é um indice que aponta para o primeiro elemento que deve ser exibido na página atual. Ele é calculado multiplicando o número da página atual pelo numero de itens da página por exemplo na primeira pagina so teram 10 itens e a próxima página começara pelo item 11.
  const offset = currentPage * itemsPerPage;
  //currentPageData é um novo array que contém os dados a serem exibidos na página atual.
  const currentPageData = tasks.slice(offset, offset + itemsPerPage)

  const handleCheck = async (index, isChecked, taskId) => {

    const locatedIndex = tasks.find(task => task.id === taskId)
    if (locatedIndex) {
      locatedIndex.isChecked = !isChecked

      try {
        await axios.put(`https://taskmap-react-daji.vercel.app/updateTasks/${user._id === undefined ? user[0]._id : user._id}`, locatedIndex, {
          headers: { 'Content-Type': 'application/json' }
        });

        toast.success('Tarefa atualizada com sucesso.')

      } catch (error) {
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
      setNovaTarefa({ id: tasks.length + 1, taskName: task, isChecked: false })
    }
  }

  // Update task
  const [isReadOnly, setReadOnly] = useState(true)
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [updatedTask, setUpdatedTask] = useState({})

  // AddClass InputFocus
  const [className, setClassName] = useState('inputFocus')

  const updateTask = (tarefa) => {
    setEditingTaskId(tarefa)
    setReadOnly(false)
  }

  const handleTaskChange = async (e, taskId) => {
    // Ele varre todas as tarefas
    const updatedTasks = tasks.map(task => {
      // Aqui ele verifica se o id da tarefa clicada é a mesma
      if (task.id === taskId) {
        // ele retorna o spread (a mesma tarefa), e da a opção de mudar o value da tarefa
        return { ...task, taskName: e.target.value }
      }
      return task;
    })
    setTasks(updatedTasks)

    const findTask = updatedTasks.map(task => {
      if (task.id === taskId) {
        setUpdatedTask(task)
      }
    })

    if (e.key === 'Enter') {
      // Utilizando esse endPoint para atualizar a tarefa
      try {
        await axios.put(`https://taskmap-react-daji.vercel.app/updateTasksInfo/${user._id === undefined ? user[0]._id : user._id}`, updatedTask, {
          headers: { 'Content-Type': 'application/json' }
        })
          .then(res => {
            if (res.status === 201) {
              toast.success('Tarefa atualizada com sucesso!')
              setReadOnly(true)
            }
          })
          .catch(error => {
            toast.error('Erro: ' + error)
          })
      } catch (error) {
        console.error(error)
      }
    }
  }

  // Função para enviar a tarefa e também limpar o input assim que clicar no botão
  const sendAndErase = (e) => {
    addTask(e, novaTarefa)

    // Pegando o input
    const input = document.getElementById('inputTaskview')
    // Limpando o input
    input.value = ""
  }

  return (
    <>
    <Header/>

    <T.component>
      <T.contents>
        <T.title> <h2>TODO LIST</h2>
          <p>Olá {user.name || user[0].name}! Seja bem-vindo(a) de volta!</p>
        </T.title>

        <T.inputsContent>
          <button onClick={sendAndErase}>Add Task</button>
          <input type="text" placeholder='what needs to be done?' onChange={(e) => taske(e.target.value)} id='inputTaskview' />
        </T.inputsContent>

        <T.tasksContent>

          {tasks === undefined ? 'Não há tarefas' : currentPageData.map(task => (
            <T.task key={task.id}>
              <T.taskInfo>
                <input type="checkbox" checked={task.isChecked} onChange={() => handleCheck(task.id, task.isChecked, task.id)} />
                <span className='slider'></span>
                <input value={task.taskName} readOnly={!(editingTaskId === task.id && !isReadOnly)} onChange={(e) => handleTaskChange(e, task.id)} onKeyDown={(e) => handleTaskChange(e, task.id)} className={(editingTaskId === task.id && className)} />
              </T.taskInfo>

              <T.taskBtn>
                <button onClick={() => deleteTask(task.id, user._id === undefined ? user[0]._id : user._id)}><Trash size={22} /></button>
                <button onClick={(e) => updateTask(task.id)}><Pencil size={22} /></button>
              </T.taskBtn>
            </T.task>
          ))}
        </T.tasksContent>

        <ReactPaginate
          previousLabel={<CaretLeft />}
          nextLabel={<CaretRight />}
          breakLabel={'...'}
          pageCount={Math.ceil(tasks.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'paginate'}
          activeClassName={'active'} // Classe para quando o item for clicado
          pageClassName={'page-item'} // Classe para cada item de página
        />
      </T.contents>
    </T.component>
    </>
  )
}
