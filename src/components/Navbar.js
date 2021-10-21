import React from 'react'
import dropdown from '../assets/navbar/dropdown-menu.svg'
import notification from '../assets/navbar/notification.svg'
import user from '../assets/navbar/user.svg'
import upgrade from '../assets/navbar/upgrade.svg'

function Navbar() {
  return (
    <div className="flex justify-end border-solid border-2 w-full filter drop-shadow-lg items-center ">
      <img src={dropdown}  className="m-2"/>
      <button className="m-2 rounded-full border-solid border-2 pl-4 pr-4 pt-1 pb-1 w-36 h-7 text-sm leading-4">Configure Tunnel</button>
      <button className="m-2 rounded-full border-solid border-2 pl-4 pr-4 pt-1 pb-1 bg-navbar-upgrade w-36 h-7 text-sm leading-4 text-white "><img src={upgrade}/>Upgrade</button>
      <img src={notification} className="m-2 h-6 w-6" />
      <img src={user} className="m-1" />
    </div>
  )
}

export default Navbar
