import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import { CreateTask } from './components/CreateTask'

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainContainer}>
        <CreateTask />
      </main>
    </div>
  )
}

export default App
