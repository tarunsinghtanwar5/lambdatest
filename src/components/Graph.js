import React from 'react'
import Chart from './Chart'
import ChartRight from './ChartRight'
import Dropdown from './Dropdown'


function Graph() {
  return (
    <div className="bg-white h-full mr-2 ml-2  filter drop-shadow-lg  ">
      <button className="m-2 rounded-full border-solid border-2 w-32 h-6 text-xs text-center leading-4 ml-10">All Users</button>
      {/* <Dropdown>
        <div className="py-1 " role="none">
          <input
                href="#"
                className="text-gray-700 block px-4 py-2 text-xs hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
                type="checkbox"
            
              />
             
              </div>
      </Dropdown> */}
       
      <button className="m-2 rounded-full border-solid border-2  w-32 h-6 text-xs text-center leading-4  ">Test Type</button>
      
      <button className="m-2 rounded-full border-solid border-2  w-48 h-6 text-xs text-center leading-4 ml-80 ">Oct 21 2021 - Oct 22 2021</button>
      <button className="m-2 rounded-full border-solid border-2  w-24 h-6 text-xs text-center leading-4  ">Day</button>
      </div>
    
  )
}

export default Graph
