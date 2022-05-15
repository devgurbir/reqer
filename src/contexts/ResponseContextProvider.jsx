import { createContext, useReducer } from "react";


const responseReducer = (state, action) => {
    switch(action.type){
        case 'request_made':
            return {
                requestMade: true,
                isLoading: false,
                ...action.payload
            }
        case 'request_started':
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}

const initState = {
    requestMade: false,
    isLoading: false,
    isError: false,
    json: "",
    responseMetaInfo: {},
    headers: []
}

export const ResponseContext = createContext();

function ResponseContextProvider({children}){
    const [responseInfo, dispatch] = useReducer(responseReducer, initState)
    return (
        <ResponseContext.Provider value={[responseInfo, dispatch]}>
            {children}
        </ResponseContext.Provider>
    )
}

export default ResponseContextProvider