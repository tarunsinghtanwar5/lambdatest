import React from 'react'
import { SIDEBAR_DATA } from '../constants/sidebar'
import SidebarListItem from './SidebarListItem'
function Sidebar() {
    return (
        
        <div className="w-180px flex flex-col h-screen bg-bg-primary pb-40 " id="sidebardiv">
           
            {SIDEBAR_DATA.map((sidebar)=>{
             return <SidebarListItem {...sidebar} />
            })}
            
        </div>
    )
}

export default Sidebar
