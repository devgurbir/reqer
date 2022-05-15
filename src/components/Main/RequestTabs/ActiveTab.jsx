import React from 'react'
import Parameters from './Parameters'
import Body from "./Body/Body"
import Headers from "./Headers"
const ActiveTab = ({active}) => {
  switch(active){
        case "Parameters":
          return <Parameters />
        case "Body":
            return <Body />
        case "Headers":
            return <Headers />
        
  }
}

export default ActiveTab