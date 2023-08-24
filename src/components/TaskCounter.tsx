import styles from './TaskCounter.module.css'

interface TasksProps {
  tasksQuantity: string[];
  taskCompleted: number;
}

export function TaskCounter({ tasksQuantity, taskCompleted }: TasksProps) {
  return (
    <div className={styles.countTasksWrapper}>
      <div className={styles.createdTasks}>
        <strong>Tarefas criadas</strong>
        <span className={styles.count}>{tasksQuantity.length}</span>
      </div>

      <div className={styles.completedTasks}>
        <strong>Concluídas</strong>
        
        {
          tasksQuantity.length === 0 
          ? 
          <span className={styles.count}>{tasksQuantity.length}</span> 
          : 
          <span className={styles.count}>{taskCompleted} de {tasksQuantity.length}</span>
        }

      </div>
    </div>
  )
}