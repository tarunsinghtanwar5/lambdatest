import React from 'react'
import { SIDEBAR_DATA } from '../constants/sidebar'
import SidebarListItem from './SidebarListItem'
function Sidebar() {
    return (
        <div className="w-2/12 flex flex-col h-screen " id="sidebardiv">
            {SIDEBAR_DATA.map((sidebar)=>{
             return <SidebarListItem {...sidebar} />
            })}
            
        </div>
    )
}

export default Sidebar
