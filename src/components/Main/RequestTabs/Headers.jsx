import React, { useState, useContext } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import styles from "../../../styles/main.module.css"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { RequestContext } from "../../../contexts/RequestContextProvider"

const SingleHeader = ({position, handleHeaderChange, handleValueChange, selected, toggleCheck, handleDelete, header, value}) => {

    return (
        <div className={styles.singleParameter}>
            <div><input onChange={(e) => handleHeaderChange(position, e)} value={header} placeholder={`Header ${position}`} /></div>
            <div><input onChange={(e) => handleValueChange(position, e)} value={value} placeholder={`Value ${position}`} /></div>
            <div>{ selected ? <DoneIcon onClick={() => toggleCheck(position)} sx={{color: "green"}} /> : <CloseIcon onClick={() => toggleCheck(position)} sx={{color: "red"}} /> }</div>
            
            <div><DeleteOutlineOutlinedIcon onClick={() => handleDelete(position)}/></div>
        </div>

    )
}


const Headers = () => {
    const [requestInfo, dispatch] = useContext( RequestContext )
    const headersListFromContext = requestInfo.headers

    const handleHeaderChange = (position, e) => {
            // const updatedHeaders = headersListFromContext.map((el, i) => i == Number(position - 1) ? {...el, header: e.target.value} : el )
            if(headersListFromContext.length == position){
                const updatedHeaders = headersListFromContext.map((el, i) => i == Number(position - 1) ? {...el, header: e.target.value} : el )
                dispatch({type: "change_header", payload: [...updatedHeaders, {header: "", value: "", selected: true}]})
            }
            else{
                const updatedHeaders = headersListFromContext.map((el, i) => i == Number(position - 1) ? {...el, header: e.target.value} : el )
                dispatch({type: "change_header", payload: updatedHeaders})
            }


    }

    const handleValueChange = (position, e) => {        
        const updatedHeaders = headersListFromContext.map((el, i) => i == Number(position - 1) ? {...el, value: e.target.value} : el )
        dispatch({type: "change_header_value", payload: updatedHeaders})
    }

    const toggleCheck = (position) => {
        const updatedHeaders = headersListFromContext.map( (el, index) => index == position - 1 ? {...el, selected: !el.selected} : el)
        dispatch({type: "toggle_header", payload: updatedHeaders})
    }

    const handleDelete = (position) => {
        if(headersListFromContext.length == 1) return
        const updatedHeaders = headersListFromContext.filter( (el, index) => index != position - 1)
        dispatch({type: "delete_header", payload: updatedHeaders})
    }
  return (
    <div style={{marginTop: '1rem'}}>
        <h5 style={{color:"#a3a3a3", marginBottom: "8px"}}>Header List</h5>
        <div>
            {headersListFromContext.map((param, index) => {
                return <SingleHeader handleDelete={handleDelete} toggleCheck={toggleCheck} handleHeaderChange={handleHeaderChange} handleValueChange={handleValueChange} position={index+1} selected={param.selected} header={param.header} value={param.value} />
            })}
        </div>
    </div>
  )
}

export default Headers