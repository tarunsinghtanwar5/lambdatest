import React from 'react'
import jira from '../assets/jira.svg'
import slack from '../assets/slack.svg'
import asana from '../assets/asana.svg'

function Integrations() {
  return (
    <div className="bg-white  h-full filter drop-shadow-lg flex justify-between flex-col pl-5 pt-2.5">
     <h1 className="font-semibold text-sm">INTEGRATIONS</h1>
     <div className='flex pt-2.5 items-center'>
      <img src={jira} />
      <h1 className="font-semibold text-sm pl-2.5">JIRA</h1>
      <button className="m-2 rounded-full border-solid border-2 pl-4 pr-4 pt-1 pb-1 bg-navbar-upgrade w-22 h-7 text-sm leading-4 text-white ml-auto">INSTALL</button>
      </div>

      <div className='flex pt-2.5 items-center'>
      <img src={slack} />
      <h1 className="font-semibold text-sm pl-2.5">SLACK</h1>
      <button className="m-2 rounded-full border-solid border-2 pl-4 pr-4 pt-1 pb-1 bg-navbar-upgrade w-22 h-7 text-sm leading-4 text-white ml-auto ">INSTALL</button>
      </div>

      <div className='flex pt-2.5 items-center'>
      <img src={asana} />
      <h1 className="font-semibold text-sm pl-2.5">ASANA</h1>
      <button className="m-2 rounded-full border-solid border-2 pl-4 pr-4 pt-1 pb-1 bg-navbar-upgrade w-22 h-7 text-sm leading-4 text-white ml-auto ">INSTALL</button>
      </div>
      <a href='integrations.lambdatest.com' className="text-sm text-navbar-upgrade mt-auto mb-2.5">See More</a>
    </div>
  )
}

export default Integrations
