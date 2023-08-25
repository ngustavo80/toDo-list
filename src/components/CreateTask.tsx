import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from '@phosphor-icons/react'

import { TaskCounter } from './TaskCounter'
import { Tasks } from './Tasks'

import styles from './CreateTask.module.css'

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean
}

export function CreateTask() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = { id: uuidv4(), title: newTaskText, isCompleted: false }
    setTasks([...tasks, newTask])
  } 

  function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskContent: string) {
    const tasksWithoutTheDeletedOne = tasks.filter(task => task.id !== taskContent)

    setTasks(tasksWithoutTheDeletedOne)
  }

  function toggleCompleteTask(id: string) {
    const tasksArrayToggled = tasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task
    })

    setTasks(tasksArrayToggled)
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

      <TaskCounter 
        tasksArray={tasks}  
      />

      {
        tasks.map(task => {
          return (
            <Tasks 
              key={task.id}
              content={task} 
              onDeleteTask={deleteTask}
              onToggleTask={toggleCompleteTask}         
            />
          )
        })
      }
    </main>
  )
}