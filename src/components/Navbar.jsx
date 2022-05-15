
import SaveIcon from '@mui/icons-material/Save';
 import React from 'react'
 import styles from "../styles/navbar.module.css"
 
 const Navbar = () => {
   return (
     <div className={styles.navbar}>
         <h4 className={styles.logo}>Reqer</h4>
         <div style={{display: "flex", gap:"1rem"}}>
             <button disabled={true} className={styles.btn}><SaveIcon />Save Your Workspace</button>
             <button disabled={true}  className={`${styles.btn} btnPrimary`} >Login</button>
         </div>
     </div>
   )
 }
 
 export default Navbar