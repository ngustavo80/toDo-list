import styles from './TaskCounter.module.css'

import { TaskProps } from './CreateTask'

interface TaskArrayProps {
  tasksArray: Array<TaskProps>;
}

export function TaskCounter({ tasksArray }: TaskArrayProps) {
  const filteredArrayWithCompletedTasks = tasksArray.filter(task => task.isCompleted === true)

  return (
    <div className={styles.countTasksWrapper}>
      <div className={styles.createdTasks}>
        <strong>Tarefas criadas</strong>
        <span className={styles.count}>{tasksArray.length}</span>
      </div>

      <div className={styles.completedTasks}>
        <strong>Concluídas</strong>
          <span className={styles.count}>{filteredArrayWithCompletedTasks.length} de {tasksArray.length}</span>
      </div>
    </div>
  )
}