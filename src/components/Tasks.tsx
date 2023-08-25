import { Trash } from '@phosphor-icons/react'

import styles from './Tasks.module.css'
import { TaskProps } from './CreateTask';

interface ContentProps {
  content: TaskProps;
  onDeleteTask: (taskContent: string) => void;
  onToggleTask: (id: string) => void;
}

export function Tasks({ content, onDeleteTask, onToggleTask }: ContentProps) {

  function handleDeleteTask() {
    onDeleteTask(content.id)
  }

  function handleCompleteTask() {
    onToggleTask(content.id)
  }

  return (
    <div className={styles.tasksContainer}>
        <ul className={styles.tasksList}>
          <li>
              <div className={styles.inputWrapper}>
                <input type="checkbox" onClick={handleCompleteTask} /> 
                <p className={content.isCompleted ? styles.taskTextChecked : styles.taskText}>
                  {content.title}
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