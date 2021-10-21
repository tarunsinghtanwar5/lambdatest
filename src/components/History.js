import React, { useState } from 'react'

function History() {
  const [tabValue, setTabValue] = useState("tests")
  const testOnClickHandler= ()=>{
    setTabValue("tests")
  }
  const issueOnClickHandler= ()=>{
    setTabValue("issues")
  }
  return (
    // <div className="bg-white m-2 w-200 h-full flex">
      
      
    //     <span className="mr-5 w-1/2 p-1 text-sm cursor-pointer" onClick={testOnClickHandler}>RECENT TESTS</span>
    //   {tabValue=="tests" && (
    //   <div className="flex flex-col justify-start">
    //   <a>google asdsa sadsa</a>
    //   <a>random asdsa sadsa</a>
    //   <a>buildname asdsa sadsa</a>
    //     </div>
    //   )}
      
    //   <div className="flex flex-col">
    //   <span className="mr-5 w-1/2 p-1 text-sm cursor-pointer" onClick={issueOnClickHandler}>RECENT ISSUES</span>
    //     {tabValue == "issues" && (
    //       <div className="flex flex-col justify-start">
    //     <a>tab2 tab2 23sadsa </a>
    //     <a>tab2 tab2sa asdsa </a>
    //     <a>tab2 tab2 adsadsa </a>
    //     </div>
    //     )}
    //   </div>
    //   </div>
    <div className="flex flex-col filter drop-shadow-lg">
      <div className="flex ">
        <span>RECENT TESTS</span>
        <span>RECENT ISSUES</span>
      </div>
      <div  className="flex"></div>

    </div>
    
  )
}

export default History
