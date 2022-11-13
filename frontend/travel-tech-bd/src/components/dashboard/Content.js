import React from 'react'
import User from './passenger/User'


function Content({menuState, setMenuState}) {
  
  return (
    <div >
      {
        menuState === "add_user" ? <User/> : null
      }
      
      
    </div>
  )
}

export default Content