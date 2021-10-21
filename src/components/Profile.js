import React from 'react'
import profile from '../assets/profile.jpg'

function Profile() {
  return (
    <div className=" m-2 h-full bg-white">
      <div className="flex">
        <img src={profile} className="flex h-14 "/>
      <div className="flex flex-2 flex-col">
      <h2>Hello</h2>
      <h1>Tarun Singh</h1>
        </div>
      </div>
    
      <button className="m-1 rounded-md border-solid border-2 pl-2 pr-2">Add Team</button>
    </div>
  )
}

export default Profile
