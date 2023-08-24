import { Trash } from '@phosphor-icons/react'

import styles from './Tasks.module.css'
import { useState } from 'react'

export function Tasks() {
  const [inputState, setInputState] = useState(false)

  function handleInputState() {
    if (inputState === false) {
      setInputState(true)
    } else if (inputState === true) {
      setInputState(false)
    }

    console.log(inputState)
  }

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.countTasksWrapper}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span className={styles.count}>5</span>
        </div>

        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span className={styles.count}>2 de 5</span>
        </div>
      </div>

        <ul className={styles.tasksList}>
          <li>
            <input type="checkbox" onClick={handleInputState} /> 
            <p className={inputState ? styles.taskTextChecked : styles.taskText}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button className={styles.deleteTaskButton} type='button'>
              <Trash size={20} />
            </button>
          </li>
        </ul>
    </div>
  )
}