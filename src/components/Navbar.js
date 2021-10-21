import React from 'react'
import dropdown from '../assets/navbar/dropdown-menu.svg'
import notification from '../assets/navbar/notification.svg'
import user from '../assets/navbar/user.svg'
import upgrade from '../assets/navbar/upgrade.png'

function Navbar() {
  return (
    <div className="flex justify-end border-solid border-2 w-full filter drop-shadow-lg ">
      <img src={dropdown}  className="m-2"/>
      <button className="m-2 rounded-full border-solid border-2 pl-4 pr-4 pt-1 pb-1 ">Configure Tunnel</button>
      <button className="m-2 rounded-full border-solid border-2 pl-4 pr-4 pt-1 pb-1 bg-blue-400">Upgrade</button>
      <img src={notification} className="m-2" />
      <img src={user} className="m-1" />
    </div>
  )
}

export default Navbar
