import React, { useState, useEffect, useRef } from 'react'
import RequestContextProvider from '../../contexts/RequestContextProvider'
import ResponseContextProvider from '../../contexts/ResponseContextProvider'
import MakeRequest from './MakeRequest'
import RequestArea from './RequestArea'
import ResponseArea from './ResponseArea'

const MainWrapper = () => {
    
  return (
    <div style={{padding: "1em", width: "100%"}}>
        <RequestContextProvider>
          <ResponseContextProvider>
            <MakeRequest />
            <RequestArea  />
            <ResponseArea />
          </ResponseContextProvider>       
        </RequestContextProvider>
    </div>
  )
}

export default MainWrapper