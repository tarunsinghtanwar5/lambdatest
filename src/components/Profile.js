import React from 'react'
import profile from '../assets/profile.jpg'
import miniprofile from '../assets/Profile/User_blue.svg';

function Profile() {
  return (
    <div className="h-full bg-white p-4">
      <div className="flex pt-2">
        <img src={profile} className="flex h-14 "/>
      <div className="flex flex-2 flex-col ">
      <h2 className="font-light text-sm">Hello</h2>
      <h1 className="font-semibold">Tarun Singh</h1>
        </div>
      </div>
      <button className="ml-14 items-center pt-1 pb-1 pr-4 rounded-full bg-gray-100 text-xxs w-26 flex"><img src={miniprofile} className="pr-1"/>ADD TEAM</button>
    </div>
  )
}

export default Profile
