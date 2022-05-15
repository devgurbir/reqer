import React from 'react'
import styles from '../../styles/main.module.css'
import StyledTabHeaders from "./Styled/StyledTabHeaders"
const RequestTabHeaders = ({tabs, handleSelect}) => {
  return (
    <div className={styles.tabHeaders} >
        {tabs?.map(el => <StyledTabHeaders onClick={ () => handleSelect(el.type)} active={el.active} disabled={el.disabled}>{el.type}</StyledTabHeaders>)}
    </div>
  )
}

export default RequestTabHeaders