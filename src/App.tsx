import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <CreateTask />
    </div>
  )
}

export default App
