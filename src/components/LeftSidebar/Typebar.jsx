import React from 'react'
import Type from './Type'
import LinkIcon from '@mui/icons-material/Link';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import styles from "../../styles/leftsidebar.module.css"
import LanguageIcon from '@mui/icons-material/Language';
const Typebar = () => {
  return (
    <div className={styles.wrapper}>
        <Type icon={<LinkIcon />} text="REST"  />
        <Type icon={<GraphicEqIcon />} text="GraphQL"  disabled={true}/>
        <Type icon={<LanguageIcon />} text="Realtime" disabled={true} />
    </div>
  )
}

export default Typebar