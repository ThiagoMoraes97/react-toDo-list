import './global.css'
import styles from './App.module.css'
import { MdAddCircleOutline } from "react-icons/md";
import { Task } from './components/Task'
import { useState, useEffect } from 'react';
import { FormEvent, ChangeEvent } from 'react';

interface Task {
  isCompleted: boolean;
  content: string;
}

export function App() {

  const [tasks, setTasks] = useState< Task[]>([]);
  const [taskText, setTaskText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  function handleCreateNewTasks (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!taskText.trim()) return;
    setTasks( (prevState) => [...prevState, {isCompleted: false, content: taskText}]);
    setTaskText('');
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value)
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.content !== taskToDelete);
    setTasks(tasksWithoutDeletedOne);
  }

  function changeCompletedTasks(taskCompleted: string) {
    const tasksCompleted = tasks.map(task => {
      console.log(task.content === taskCompleted);
      if (task.content === taskCompleted) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(tasksCompleted);
  }
  
  useEffect(() => {
    const storedTasks = localStorage.getItem('@igniteToDoList:tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    setIsLoaded(true);
  }, [])


  useEffect(() => {
    if ( isLoaded ) {
      localStorage.setItem('@igniteToDoList:tasks', JSON.stringify(tasks));
    }
  }, [tasks, isLoaded])

  const completedTasksNumber = tasks.filter(task => task.isCompleted).length;
  const totalTasksNumber = tasks.length;

  return (
    <div className={styles.page}>
      <header className={styles.header}> 
        <img src="/public/rocketLogo.svg" alt="Logo" />
      </header>

      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleCreateNewTasks}>
          <input type="text" placeholder='Adicione uma nova tarefa' name='taskValue' value={taskText} onChange={handleInputChange}/>
          <button type="submit">Criar <MdAddCircleOutline size={16}/></button>
        </form>

        <section className={styles.tasks}>
          <header className={styles.tasksHeader}>
            <div className={styles.tasksCreated}>
              <strong>Tarefas criadas</strong>
              <span>{totalTasksNumber}</span>
            </div>
            <div className={styles.tasksCompleted}>
              <strong>Concluídas</strong>
              <span>{completedTasksNumber} de {totalTasksNumber}</span>
            </div>
          </header>

          <div className={styles.tasksList}>
            { totalTasksNumber > 0 ? 
              tasks.map(task => <Task key={task.content} content={task.content} onDelete={deleteTask} onCompleted={changeCompletedTasks} isCompleted={task.isCompleted}/>) : 
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
