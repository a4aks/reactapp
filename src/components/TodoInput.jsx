import React, {useState} from 'react'
import styles from "./TodoInput.module.css";

export const TodoInput = (props) => {
  const [value, setValue] = useState("");
  return (
    <div>
        <div className={styles.inputlist}>
                <input type="text" value={value} onChange={e => setValue(e.currentTarget.value)} />
                <button className = {styles.addbutton} onClick={() => {
                    if (value) {
                        props.setTodos([...props.todos, value]);
                        console.log(props.todos)
                        setValue("")
                    } else {
                        alert("Enter the item ")
                    }
                }}>+</button>
            </div>
    </div>
  )
}
