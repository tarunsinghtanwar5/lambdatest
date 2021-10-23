import React from 'react'

function Graph() {
  return (
    <div className="bg-white h-full filter shadow-sm p-4 pb-6 mr-2 ml-2">
      <div className="justify-between flex mb-2">
        <div>
          <button className="m-2 rounded-full border-solid border-2 w-32 h-6 text-xs text-center leading-4">All Users</button>
          <button className="m-2 rounded-full border-solid border-2 w-32 h-6 text-xs text-center leading-4">Test Type</button>
        </div>
        <div>
          <button className="m-2 rounded-full border-solid border-2 w-48 h-6 text-xs text-center leading-4">Oct 21 2021 - Oct 22 2021</button>
          <button className="m-2 rounded-full border-solid border-2 w-24 h-6 text-xs text-center leading-4">Day</button>
        </div>
      </div>
      <img src="https://user-images.githubusercontent.com/10905662/138569164-1948d26c-f17d-41c6-aa00-e7e498c88526.png" />
    </div>
  )
}

export default Graph
