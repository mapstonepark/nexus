import React from 'react'
import styles from '../styles/Card.module.css'


export default function Card() {
  return (
    <>
   
    <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>This is a card</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatibus voluptates quod non illo numquam rerum eius debitis aspernatur recusandae sint, porro laboriosam maxime facilis labore nobis accusamus ratione quas!</p>
          </a>
    </div>
   
    </>
   
  )
}


