import React, {useContext} from 'react'
import { ResponseContext } from '../../../contexts/ResponseContextProvider';
import styles from "../../../styles/main.module.css"
import JSONPretty from 'react-json-pretty';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

const customTheme = {
  main: 'color:#737373;background:#fff;overflow:auto; font-size: 12px; font-weight: 500',
  error: 'color:#737373;background:#fff;overflow:auto;',
  key: 'color:#737373;',
  string: 'color:#737373;margin-left: 0.3em',
  value: 'color:#737373; margin-left: 0.3em ',
  boolean: 'color:#737373; margin-left: 0.3em',
}

const RawResponseBody = () => {
  const [responseInfo, _] = useContext(ResponseContext);
  const {json} = responseInfo
  return (
    <div style={{marginTop: '1rem', padding: "1em", paddingTop: 0}}>
        <h5 style={{color:"#a3a3a3"}}>Response Body</h5>
        {/* <div>
            <textarea className={`${styles.codeArea} ${styles.responseCodeArea}`}  defaultValue="" readOnly />
        </div> */}
        {/* <JSONPretty id="json-pretty" data={json} theme={customTheme}></JSONPretty> */}
        <div style={{fontSize:"12px", color:"#444", fontWeight: "500"}}>
          <code>{JSON.stringify(json)}</code>
        </div>
    </div>

  )
}

export default RawResponseBody