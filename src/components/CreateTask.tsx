import { ChangeEvent, FormEvent, useState } from 'react'

import { PlusCircle } from '@phosphor-icons/react'

import { TaskCounter } from './TaskCounter'
import { Tasks } from './Tasks'

import styles from './CreateTask.module.css'

export function CreateTask() {
  const [tasks, setTasks] = useState<string[]>([])
  const [newTaskText, setNewTaskText] = useState('')
  const [completedTasks, setCompletedTasks] = useState(0)

  function sumCompletedTasks() {
    setCompletedTasks((state) => { return state + 1})
  }

  function minusCompletedTasks() {
    setCompletedTasks((state) => { return state - 1})
  }

  function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, newTaskText])
  } 

  function deleteTask(taskContent: string) {
    const tasksArrayWithoutTheDeletedOne = tasks.filter(task => task !== taskContent)

    setTasks(tasksArrayWithoutTheDeletedOne)
  }

  return (
    <main className={styles.mainContainer}>
      <form className={styles.createTaskInput} onSubmit={handleCreateNewTask}>
        <input 
          type="text"
          placeholder="Adicione uma nova tarefa" 
          name="inputTask"
          onChange={handleNewTaskText}
        />
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <TaskCounter tasksQuantity={tasks} taskCompleted={completedTasks} />

      {
        tasks.map(task => {
          return (
            <Tasks 
              content={task} 
              onDeleteTask={deleteTask} 
              sumCompletedTasks={sumCompletedTasks} 
              minusCompletedTasks={minusCompletedTasks}
            />
          )
        })
      }
    </main>
  )
}