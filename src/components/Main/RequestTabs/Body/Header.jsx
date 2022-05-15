import React from 'react'
import BodyType from './BodyType'
const Header = () => {
  return (
    <div style={{marginTop: '1rem'}}>
        <div style={{display:"flex", gap:"1.5rem"}}>
        <h5 style={{color:"#a3a3a3"}}>Content Type</h5>
        <BodyType />
        </div>
    </div>
  )
}

export default Header