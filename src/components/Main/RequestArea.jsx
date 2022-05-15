import React, {useState, useEffect, useRef} from 'react'
import RequestTabHeaders from "./RequestTabHeaders"
import ActiveTab from './RequestTabs/ActiveTab'

const tabHeaderList = [
  {type: "Parameters", active: true, disabled: false},
  {type: "Body", active: false, disabled: false},
  {type: "Headers", active: false, disabled: false},
  {type: "Authorization", active: false, disabled: true},
  {type: "Pre-request scripts", active: false, disabled: true},
  {type: "Tests", active: false, disabled: true}
]

const RequestArea = () => {
  
  const [tabs, setTabs] = React.useState(tabHeaderList)
  const [active, setActive] = React.useState("Parameters");
  const [topPosition, setTopPosition] = useState(null);
  const handleSelect = (type) => {
    setActive(type)
    setTabs(tabs.map(el => el.type == type ? {...el, active: true} : {...el, active: false}))
  }

  const divRef = useRef(null);

  
  
  useEffect( () => {
    let positions = divRef.current?.getBoundingClientRect()
    setTopPosition(positions.top)
  }, [])

  return (
    <div>
        <RequestTabHeaders tabs = {tabs} handleSelect={handleSelect} />
        <div ref={divRef} style={{height: `calc(100vh - ${topPosition}px)`}}>
          <ActiveTab active={active} />
        </div>
        {/* <Parameters /> */}
        {/* <Body /> */}
    </div>
  )
}

export default RequestArea