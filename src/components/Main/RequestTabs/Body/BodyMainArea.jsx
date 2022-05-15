import React, {useContext} from 'react'
import styles from "../../../../styles/main.module.css"
import { RequestContext } from '../../../../contexts/RequestContextProvider';
const BodyMainArea = () => {
    const [requestInfo, dispatch] = useContext( RequestContext )

    const {body} = requestInfo?.body
    // const [code, setCode] = React.useState("")
        
  return (
    <div style={{marginTop: "0.5em", width: '100%'}}>
        <h5 style={{color:"#a3a3a3"}}>Raw Request Body</h5>
        <textarea spellCheck="false" className={styles.codeArea} value={body} onChange={(e) => dispatch({type: "set_body_code", payload: e.target.value})} />
    </div>
  )
}

export default BodyMainArea