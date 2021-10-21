import React, { useState } from 'react'
import { SIDEBAR_DATA } from '../constants/sidebar'
import SidebarListItem from './SidebarListItem'
function Sidebar() {
    const [display, setDisplay] = useState("false")
  
    return (
        
        <div className="max-w-44 flex flex-col h-screen bg-bg-primary pb-40 " id="sidebardiv">
           
            {SIDEBAR_DATA.map((sidebar)=>{
             return <SidebarListItem {...sidebar} display={display} />
            })}
            
        </div>
    )
}

export default Sidebar
