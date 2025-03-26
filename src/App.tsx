import './global.css'
import styles from './App.module.css'
import { MdAddCircleOutline } from "react-icons/md";
import { Task } from './components/Task'
import { useState } from 'react';

export function App() {

  const [tasks, setTasks] = useState([1]);

  const hasTasks = tasks.length > 0;

  return (
    <div className={styles.page}>
      <header className={styles.header}> 
        <img src="/public/rocketLogo.svg" alt="Logo" />
      </header>

      <main className={styles.main}>
        <form className={styles.form}>
          <input type="text" placeholder='Adicione uma nova tarefa'/>
          <button type="submit">Criar <MdAddCircleOutline size={16}/></button>
        </form>

        <section className={styles.tasks}>
          <header className={styles.tasksHeader}>
            <div className={styles.tasksCreated}>
              <strong>Tarefas criadas</strong>
              <span>0</span>
            </div>
            <div className={styles.tasksCompleted}>
              <strong>Concluídas</strong>
              <span>0</span>
            </div>
          </header>

          <div className={styles.tasksList}>
            { hasTasks ? 
              tasks.map(task => <Task />) : 
              <div className={styles.noRegisteredTasks}>
                <img src="/clipboard.png" alt="Clipboard" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div> 
            }
          </div>
        </section>
      </main>
    </div>
  )
} 
