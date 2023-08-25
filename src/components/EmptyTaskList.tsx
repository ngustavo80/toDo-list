import styles from './EmptyTaskList.module.css'

import clipboard from '../assets/clipboard.svg'

export function EmptyTaskList() {
  return (
    <div className={styles.emptyContainer}>
      <img src={clipboard} alt="" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}