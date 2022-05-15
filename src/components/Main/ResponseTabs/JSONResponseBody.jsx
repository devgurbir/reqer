import React, {useContext} from 'react'
import { ResponseContext } from '../../../contexts/ResponseContextProvider';
import styles from "../../../styles/main.module.css"
import JSONPretty from 'react-json-pretty';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

const customTheme = {
  main: 'color:#737373;background:#fff;overflow:auto; font-size: 12px; font-weight: 500',
  error: 'color:#66d9ef;background:#fff;overflow:auto;',
  key: 'color:#dc2626;',
  string: 'color:#2563EB;margin-left: 0.3em',
  value: 'color:#7c3aed; margin-left: 0.3em ',
  boolean: 'color:hotpink; margin-left: 0.3em',
}

const JSONResponseBody = () => {
  const [responseInfo, _] = useContext(ResponseContext);
  const {json} = responseInfo
  const stringified = JSON.stringify(json)
  return (
    <div style={{marginTop: '1rem', padding: "1em", paddingTop: 0}}>
        <h5 style={{color:"#a3a3a3"}}>Response Body</h5>
        {/* <div> */}
            {/* <textarea value={stringified} className={`${styles.codeArea} ${styles.responseCodeArea}`}  defaultValue="" readOnly /> */}
            <JSONPretty id="json-pretty" data={json} theme={customTheme}></JSONPretty>
        {/* </div> */}
    </div>

  )
}

export default JSONResponseBody