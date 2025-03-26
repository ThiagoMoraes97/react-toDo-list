import styles from './Task.module.css'
import { TbTrash } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { useState } from 'react';

export function Task() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked((prevChecked) => !prevChecked);
  }

  return (
    <div className={styles.task}>
      <div className="input-wrapper">
        <label htmlFor="taskIsCompleted">
          {isChecked && <FaCheck size={10}/>}
        </label>
        <input type="checkbox" name="taskIsCompleted" onClick={handleCheckboxChange}/>
      </div>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button>
        <TbTrash size={18} />
      </button>
    </div>
  )
}