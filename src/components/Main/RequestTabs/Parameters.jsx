import React, { useState, useContext } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import styles from "../../../styles/main.module.css"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { RequestContext } from "../../../contexts/RequestContextProvider"

const SingleParameter = ({position, parameter, val, handleParameterChange, handleValueChange, selected, toggleCheck, handleDelete}) => {

    return (
        <div className={styles.singleParameter}>
            <div><input onChange={(e) => handleParameterChange(position, e)} placeholder={`Parameter ${position}`} value={parameter} /></div>
            <div><input onChange={(e) => handleValueChange(position, e)} placeholder={`Value ${position}`} value={val} /></div>
            <div>{ selected ? <DoneIcon onClick={() => toggleCheck(position)} sx={{color: "green"}} /> : <CloseIcon onClick={() => toggleCheck(position)} sx={{color: "red"}} /> }</div>
            
            <div><DeleteOutlineOutlinedIcon onClick={() => handleDelete(position)}/></div>
        </div>

    )
}


const Parameters = () => {

    const [requestInfo, dispatch] = useContext( RequestContext )
    const parameterListFromContext = requestInfo.parameters

    const handleParameterChange = (position, e) => {
            // const updatedParameters = parameterListFromContext.map((el, i) => i == Number(position - 1) ? {...el, parameter: e.target.value} : el )
            if(parameterListFromContext.length == position){
                const updatedParameters = parameterListFromContext.map((el, i) => i == Number(position - 1) ? {...el, parameter: e.target.value} : el )
                dispatch({type: "change_parameter", payload: [...updatedParameters, {parameter: "", value: "", selected: true}]})
            }
            else{
                const updatedParameters = parameterListFromContext.map((el, i) => i == Number(position - 1) ? {...el, parameter: e.target.value} : el )
                dispatch({type: "change_parameter", payload: updatedParameters})
            }


    }

    const handleValueChange = (position, e) => {        
        const updatedParameters = parameterListFromContext.map((el, i) => i == Number(position - 1) ? {...el, value: e.target.value} : el )
        console.log(updatedParameters)
        dispatch({type: "change_value", payload: updatedParameters})
    }

    const toggleCheck = (position) => {
        const updatedParameters = parameterListFromContext.map( (el, index) => index == position - 1 ? {...el, selected: !el.selected} : el)
        dispatch({type: "toggle_parameter", payload: updatedParameters})
    }

    const handleDelete = (position) => {
        if(parameterListFromContext.length == 1) return
        const updatedParameters = parameterListFromContext.filter( (el, index) => index != position - 1)
        dispatch({type: "delete_parameter", payload: updatedParameters})
    }
  return (
    <div style={{marginTop: '1rem'}}>
        <h5 style={{color:"#a3a3a3", marginBottom: "8px"}}>Parameters</h5>
        <div>
            {parameterListFromContext?.map((param, index) => {
                // console.log(index)5
                return <SingleParameter parameter={param.parameter} val={param.value} handleDelete={handleDelete} toggleCheck={toggleCheck} handleParameterChange={handleParameterChange} handleValueChange={handleValueChange} position={index+1} selected={param.selected} />
            })}
        </div>
    </div>
  )
}

export default Parameters