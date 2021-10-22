import React from 'react'
import ChartRight from './ChartRight'

function Automation() {
  return (
    <div className="bg-white h-full filter drop-shadow-lg pl-4 pr-4 pt-2.5 flex flex-col">
      <div>
      <h1 className="font-semibold text-sm">AUTOMATION SESSIONS</h1>
      <h2 className="font-light text-xs">Subscribed 2 Parrallel Sessions</h2>
      <h2 className="font-semibold text-sm mt-2.5">Total Realtime Tests:<span className="font-light pl-2 text-sm">1,394</span></h2>
       </div>

       <div className="flex justify-center items-center w-full h-28 flex-col mt-5 relative">
       <ChartRight />
      <span className="font-semibold text-3xl absolute">0</span>
       <span>Parallel Sessions</span>
       </div>
      <a href="app.lambdatest.com/console/test-logs" className="text-sm text-navbar-upgrade  mt-auto mb-2.5">VIEW LOGS</a>
    </div>
  )
}

export default Automation
