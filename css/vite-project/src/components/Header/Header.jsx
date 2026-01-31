import React from 'react'
import styles from "./Header.module.css";
function Header() {
  return (
    <div >
        <h3 className={styles.header}>Header
     
        <button className= {styles.btn}> Click Me</button>
    </h3>
    </div>
  )
}

export default Header