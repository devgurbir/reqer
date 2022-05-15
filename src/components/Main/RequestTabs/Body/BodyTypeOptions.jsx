import React from 'react'
import styles from "../../../../styles/main.module.css"


const BodyTypeOptions = ({options, handleSelect}) => {    
  return (
    <div className={styles.bodyTypeOptions}>
        {options?.map( option => <button key={option.type} onClick = {() => handleSelect(option.type)} className={styles.option}>{option.type}</button>)}
    </div>
  )
}

export default BodyTypeOptions