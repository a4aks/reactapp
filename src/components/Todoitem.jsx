import React from 'react'
import styles from "./todoitem.module.css";

export const Todoitem = (props) => {
  return (
    <div className={styles.listitem}> 
        <div>{props.todo}</div>
    </div>
  )
}
