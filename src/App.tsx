import './global.css'
import styles from './App.module.css'
import { MdAddCircleOutline } from "react-icons/md";

export function App() {
  return (
    <div className={styles.page}>
      <header className={styles.header}> 
        <img src="/public/rocketLogo.svg" alt="Logo" />
      </header>

      <main className={styles.main}>
        <form>
          <input type="text" placeholder='Adicione uma nova tarefa'/>
          <button type="submit">Criar <MdAddCircleOutline/></button>
        </form>

        <section className={styles.tasks}>
          <header className={styles.tasksHeader}>
            <div className={styles.tasksHeaderInfo}>
              <div className={styles.tasksCreated}></div>
              <div className={styles.tasksCompleted}></div>
            </div>
          </header>
          <div className={styles.tasksList}>
            
          </div>
        </section>
      </main>
    </div>
  )
}
