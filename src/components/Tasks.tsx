import { useState } from 'react'

import { Trash } from '@phosphor-icons/react'

import styles from './Tasks.module.css'

interface TasksProps {
  content: string;
  onDeleteTask: (taskContent: string) => void;
  sumCompletedTasks: () => void;
  minusCompletedTasks: () => void;
}

export function Tasks({ content, onDeleteTask, sumCompletedTasks,  minusCompletedTasks }: TasksProps) {
  const [inputState, setInputState] = useState(false)
  
  function handleInputState() {
    switch (inputState) {
      case false:
        setInputState(true)
        sumCompletedTasks()
      break;

      case true:
        setInputState(false)
        minusCompletedTasks()
      break
    }
  }

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={styles.tasksContainer}>
        <ul className={styles.tasksList}>
          <li>
              <div className={styles.inputWrapper}>
                <input type="checkbox" onClick={handleInputState} /> 
                <p className={inputState ? styles.taskTextChecked : styles.taskText}>
                  {content}
                </p>
              </div>
              <button className={styles.deleteTaskButton} type='button' onClick={handleDeleteTask}>
                <Trash size={20} />
              </button>
            </li>
        </ul>
    </div>
  )
}