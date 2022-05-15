import React, {useState, useEffect, useRef, useContext} from 'react'
import styles from "../../styles/main.module.css"
import ResponseInfo from "./ResponseInfo"
import RequestTabHeaders from './RequestTabHeaders'
import ActiveTab from './ResponseTabs/ActiveTab'
import Waiting from './Waiting'
import Loading from './Loading'
import { ResponseContext } from '../../contexts/ResponseContextProvider'
const ResponseArea = () => { 
    const [tabs, setTabs] = useState([
        {type: "JSON", active: true},
        {type: "Raw", active: false},    
        {type: "Headers", active: false}        
    ])

    const [active, setActive] = React.useState("JSON");

    const handleSelect = (type) => {
        setActive(type)
        setTabs(tabs.map(el => el.type == type ? {...el, active: true} : {...el, active: false}))
      }

    const [position, setPosition] = useState(null);

  
  const divRef = useRef(null);

  useEffect( () => {
    setPosition(divRef.current.getBoundingClientRect().height)
  })

  const [responseInfo, _] = useContext(ResponseContext)

  // console.log("ResponseINFO", responseInfo)

  const refTop = useRef(null);

  useEffect(() => {
    const resizeableEle = divRef.current;
    const styles = window.getComputedStyle(resizeableEle);
    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);
    let x = 0;
    let y = 0;

    // resizeableEle.style.bottom = `${position - 10}px`;

    // Top resize
    const onMouseMoveTopResize = (event) => {
      if(event.clientY < 83){
        return;
      }

      
      const dy = event.clientY - y;
      height = height - dy;
      let bottomVal = resizeableEle.style.bottom.split("");
      bottomVal.pop();
      bottomVal.pop();
      bottomVal = Number(bottomVal.join(""))
      y = event.clientY;

      console.log(resizeableEle.getBoundingClientRect())

      let val = resizeableEle.style.height.split("")
      val.pop()
      val.pop()

        resizeableEle.style.bottom = `${bottomVal - dy}px`
        resizeableEle.style.height = `${height}px`;
        
      
    };

    const onMouseUpTopResize = (event) => {
      
      
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      
      resizeableEle.style.bottom = styles.bottom;
      resizeableEle.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };



    const resizerTop = refTop.current;
    resizerTop.addEventListener("mousedown", onMouseDownTopResize);


    return () => {
      resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
    }

  }, [])

  

  return (
    <>
    
    <div ref={divRef} className={styles.responseArea + " " + styles.disableScrollbars + " " + styles.resizable} style={{bottom: `${position+10}px`}}>
    <div className={styles.resizer} ref={refTop}></div>
      {!responseInfo?.requestMade ? <Waiting /> : (
        <>
        <>{responseInfo?.isLoading && <Loading />}</>
        <>
        <div style={{position: "sticky", top:"0px", backgroundColor: "#fff"}} >    
          <ResponseInfo />
          <RequestTabHeaders tabs = {tabs} handleSelect={handleSelect} />
        </div>
        <ActiveTab active={active} />
        </>
        </>
        )}
    </div>
    </>
  )
}

export default ResponseArea