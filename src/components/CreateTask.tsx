import { PlusCircle } from '@phosphor-icons/react'

import styles from './CreateTask.module.css'

export function CreateTask() {
  return (
    <div className={styles.createTaskInput}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={20} />
      </button>
    </div>
  )
}