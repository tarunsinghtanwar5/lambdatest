import React from 'react'
import jira from '../assets/jira.svg'
import slack from '../assets/slack.svg'
import asana from '../assets/asana.svg'

function Integrations() {
  return (
    <div className="bg-white  h-full filter shadow-sm flex justify-between flex-col pl-5 pt-2.5 ml-2">
     <h1 className="font-semibold text-sm">INTEGRATIONS</h1>
     <div className='flex pt-2.5 items-center'>
        <img src={jira} className="w-9 h-9" />
        <h1 className="font-normal text-sm pl-2.5">JIRA</h1>
        <button className="m-2 rounded-full bg-bg-secondary-button pl-4 pr-4 pt-1 pb-1 w-22 h-7 text-text-secondary-button leading-4 ml-auto text-xs font-semibold ">INSTALL</button>
      </div>

      <div className='flex pt-2.5 items-center'>
        <img src={slack} className="w-9 h-9" />
        <h1 className="font-normal text-sm pl-2.5">SLACK</h1>
        <button className="m-2 rounded-full bg-bg-secondary-button pl-4 pr-4 pt-1 pb-1 w-22 h-7 text-text-secondary-button leading-4 ml-auto text-xs font-semibold ">INSTALL</button>
      </div>

      <div className='flex pt-2.5 items-center'>
        <img src={asana} className="w-9 h-9" />
        <h1 className="font-normal text-sm pl-2.5">ASANA</h1>
        <button className="m-2 rounded-full bg-bg-secondary-button pl-4 pr-4 pt-1 pb-1 w-22 h-7 text-text-secondary-button leading-4 ml-auto text-xs font-semibold ">INSTALL</button>
      </div>
      <a href="app.lambdatest.com/console/test-logs" className="text-xs font-bold text-navbar-upgrade mt-auto mb-4">SEE MORE</a>
    </div>
  )
}

export default Integrations
