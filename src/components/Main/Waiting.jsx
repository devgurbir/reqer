import React from 'react'
import styles from "../../styles/main.module.css"
const Waiting = () => {
  return (
    <div className={styles.waiting}>
        <h3>Waiting to serve your request</h3>
        <p>Get in touch with me</p>
        <ul>
            <li><a target="_blank" href="https://gurbir-singh.vercel.app/">Portfolio</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/gurbir-singh-20641a157/">LinkedIn</a></li>
            <li><a target="_blank" href="https://drive.google.com/file/d/15Lrc9t_hzSSC1iGPnwM-geqjeW1mHWsU/view?usp=sharing">Resume</a></li>
            <li><a target="_blank" href="https://github.com/devgurbir">Github</a></li>
            <li><a target="_blank" href="mailto: devgurbir@gmail.com">Email:</a> devgurbir@gmail.com</li>
        </ul>
    </div>
  )
}

export default Waiting