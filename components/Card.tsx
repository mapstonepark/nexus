import React from 'react'
import styles from '../styles/Card.module.css'


export default function Card() {
  return (
    <>
   
    <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Check Page</h3>
            <p>You are on the right page.</p>
          </a>
    </div>
   
    </>
   
  )
}


