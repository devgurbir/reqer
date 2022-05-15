import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

import styles from "../../styles/main.module.css"
const Loading = () => {
  return (
    <div className={styles.loading}>
        <CircularProgress />
    </div>
  )
}

export default Loading