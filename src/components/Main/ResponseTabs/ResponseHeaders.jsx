import React, {useContext} from 'react'
import { ResponseContext } from '../../../contexts/ResponseContextProvider';
import styles from "../../../styles/main.module.css"

const SingleHeader = ({position, header}) => {
    return (
        <div className={styles.singleParameter}>
            <div><input readOnly value={header[0]} placeholder={`Header ${position}`} /></div>
            <div><input readOnly value={header[1]} placeholder={`Value ${position}`} /></div>
        </div>
    )
}


const ResponseHeaders = () => {
  const [responseInfo, _] = useContext(ResponseContext);
  const {headers} = responseInfo
  return (
    <div style={{marginTop: '1rem', padding: "1em", paddingTop: 0}}>
        <h5 style={{color:"#a3a3a3", marginBottom: "8px"}}>Header List</h5>
        <div>
            {Object.entries(headers).map((header, index) => {
                return <SingleHeader header={header} position={index+1} />
            })}
        </div>
    </div>
  )
}

export default ResponseHeaders