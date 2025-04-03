import styles from './Task.module.css'
import { TbTrash } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";

interface TaskProps {
  content: string;
  onDelete: (taskToDelete: string) => void;
  onCompleted: (taskCompleted: string) => void;
  isCompleted: boolean;
}

export function Task({content, onDelete, onCompleted, isCompleted}: TaskProps) {
  function handleCheckboxChange() {
    onCompleted(content);
  }

  function handleDeleteTask() {
    onDelete(content);
  }


  return (
    <div className={styles.task}>
      <div className="input-wrapper">
        <label htmlFor="taskIsCompleted">
          {isCompleted && <FaCheck size={10}/>}
        </label>
        <input type="checkbox" name="taskIsCompleted" onClick={handleCheckboxChange} checked={isCompleted}/>
      </div>
      <p>{content}</p>
      <button onClick={handleDeleteTask}>
        <TbTrash size={18} />
      </button>
    </div>
  )
}