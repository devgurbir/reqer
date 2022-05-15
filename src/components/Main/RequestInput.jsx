import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "../../styles/main.module.css"
import SaveIcon from '@mui/icons-material/Save';
import axiosRequest from '../../logic/axiosRequest';
import { RequestContext } from '../../contexts/RequestContextProvider';
import { ResponseContext } from '../../contexts/ResponseContextProvider';

const getConfig = ({url, method, parameters, body, headers}) => {
  let params = {}

  for(let {parameter, value, selected} of parameters){
    if(parameter != "" && selected){
      params[parameter] = value
    }
  }

  let type = "none"

  for(let el of body.optionList){
    if(el.selected){
      type = el.type;
      break
    }
  }


  let finalBody = body.body

  let allHeaders = {};

  for(let {header, value, selected} of headers){
    if(header != "" && selected){
      allHeaders[header] = value
    }
  }

  if(type != "none"){
    allHeaders["Content-Type"] = type    
  }
  
  return {
    url,method, params, headers: allHeaders, body: finalBody
  }


}


const RequestInput = () => {
    
    const [requestInfo, dispatch] = React.useContext(RequestContext)
    const [responseInfo, resDispatch] = React.useContext(ResponseContext)
    const {url, method} = requestInfo
    
    const config = getConfig(requestInfo)

    const makeRequest = async () => {
        const config = getConfig(requestInfo);
        resDispatch({type: 'request_started'})
        const data = await axiosRequest(config)
        
        resDispatch({type:"request_made", payload: data})
    }
  
  
    
  return (
    <div style={{display:"flex", gap: "1em", width: "100%"}}>
            <div style={{flexGrow: "1", display:"flex"}}>
            <select className={styles.requestType} value={method} onChange={ (e) => dispatch({type: "set_method", payload: e.target.value})}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
            </select>

            <input onChange={e => dispatch({type: "set_url", payload: e.target.value})} value={url} style={{flexGrow:"1"}} type='text' className={styles.urlBox} placeholder="URL" />
            </div>
            <button onClick={makeRequest} className={`btn btnPrimary ${styles.requestInputBtn}`}>Send<span><ExpandMoreIcon fontSize="small"/></span></button>
            <button disabled={true} className={`btn  ${styles.requestInputBtn} `}><SaveIcon />Save<ExpandMoreIcon fontSize="small"/></button>
            
                   

    </div>
  )
}

export default RequestInput