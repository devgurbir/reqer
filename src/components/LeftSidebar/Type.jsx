import StyledType from "./styled/StyledType"
import React from 'react'
import styles from "../../styles/leftsidebar.module.css"

const Type = ({icon, text, disabled}) => {
  return (
    <StyledType disabled = { disabled} className={styles.type}>
        <span>{icon}</span>
        <span>{text}</span>
    </StyledType>
  )
}

export default Type