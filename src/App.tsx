import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import { CreateTask } from './components/CreateTask'
import { Tasks } from './components/Tasks'

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainContainer}>
        <CreateTask />

        <Tasks />
      </main>
    </div>
  )
}

export default App
