import React from 'react'
import JSONResponseBody from "./JSONResponseBody"
import RawResponseBody from "./RawResponseBody"
import ResponseHeaders from "./ResponseHeaders"


const ActiveTab = ({active}) => {
  switch(active){
        case "JSON":
          return <JSONResponseBody />
        case "Raw":
            return <RawResponseBody />
        case "Headers":
            return <ResponseHeaders />
        
  }
}

export default ActiveTab