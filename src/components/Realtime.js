import React from 'react'
import Chart from './Chart'

function Realtime() {
  return (
    <div className="bg-white  w-200 h-full filter drop-shadow-lg pl-4 pt-2.5 flex flex-col">
      <h1 className="font-semibold text-sm">REALTIME SESSIONS</h1>
      <h2 className="font-light text-xs">Subscribed 2 Parrallel Sessions</h2>
      <h2 className="font-semibold text-sm mt-2.5">Total Realtime Tests:<span className="font-light pl-2 text-sm">2,394</span></h2>
       <div className="flex justify-center items-center w-full h-28 flex-col mt-5 relative">
       <Chart  />
       <span className="font-semibold text-3xl absolute">0</span>
       <span>Parallel Sessions</span>
       </div>
      <a href="app.lambdatest.com/console/test-logs" className="text-sm text-navbar-upgrade mt-auto mb-2.5">VIEW LOGS</a>
    </div>
  )
}

export default Realtime
