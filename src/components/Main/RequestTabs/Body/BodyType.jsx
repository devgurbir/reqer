import React, { useContext } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "../../../../styles/main.module.css"
import { useState } from 'react';
import BodyTypeOptions from './BodyTypeOptions';
import { RequestContext } from '../../../../contexts/RequestContextProvider';


const BodyType = () => {

    const [requestInfo, dispatch] = useContext( RequestContext )

    const optionList = requestInfo?.body?.optionList;

    // const [options, setOptions] = useState(optionList)
    const [showModal, setShowModal] = useState(false)
    
    const handleSelect = (type) => {        
        const updatedOptions = optionList?.map( option => option.type == type ? {...option, selected: true} :  {...option, selected: false})
        dispatch({type: "select_body_type", payload: updatedOptions })
        setShowModal(false)
    }

    const selectedType = () => {
        const selectedEl = optionList.find( el => el.selected == true)["type"]
        return selectedEl
    }

  return (
      <>
    <div className={styles.bodyTypeHeader} onClick={() => setShowModal(!showModal)}>
        <span>{selectedType()}</span>
        <ExpandMoreIcon fontSize="1em"/>
        
    </div>
    {showModal && <BodyTypeOptions handleSelect={handleSelect} options={optionList} />}
    </>
  )
}

export default BodyType