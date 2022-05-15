import React, { createContext, useReducer } from 'react'

export const RequestContext = createContext()

const requestReducer = (state, action) => {
    switch(action.type){
        case "change_parameter": 
            return {...state, parameters: action.payload}
        case "change_value": 
            return {...state, parameters: action.payload}
        case "toggle_parameter": 
            return {...state, parameters: action.payload}
        case "delete_parameter": 
            return {...state, parameters: action.payload}
        case "select_body_type": 
            return {...state, body: {...state.body, optionList: action.payload} }
        case "set_body_code": 
            return {...state, body: {...state.body, body: action.payload} }
        case "change_header": 
            return {...state, headers: action.payload}
        case "change_header_value": 
            return {...state, headers: action.payload}
        case "toggle_header": 
            return {...state, headers: action.payload}
        case "delete_header": 
            return {...state, headers: action.payload}
        case "set_method":
            return {...state, method: action.payload}
        case "set_url":
            return {...state, url: action.payload}
        default: 
            return state
    }
}

const initState = {
    method: "GET",
    parameters: [{parameter: "", value: "", selected: true}],
    body: { optionList: [{type: "none", selected: true},
    {type: "application/json", selected: false},
    {type: "application/json-ld", selected: false},
    {type: "application/xml", selected: false},
    {type: "text/html", selected: false},
    {type: "text/plain", selected: false}], body: ""},
    headers: [{header: "", value: "", selected: true}],
}

const RequestContextProvider = ({children}) => {
    const [requestInfo, dispatch] = useReducer( requestReducer, initState)
  return (
        <RequestContext.Provider value={[requestInfo, dispatch]}>
            {children}
        </RequestContext.Provider>
  )
}

export default RequestContextProvider