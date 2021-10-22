import React, { useState } from 'react'

function History() {
  const [tabValue, setTabValue] = useState("tests")
  const [testBorderColor, setTestborderColor] = useState("border-navbar-upgrade")
  const [issueBorderColor, setIssueborderColor] = useState("")
  const [testFont, settestFont] = useState("font-semibold")
  const [issueFont, setissueFont] = useState("")
  const testOnClickHandler= ()=>{
    setTabValue("tests")
    setTestborderColor("border-navbar-upgrade")
    setIssueborderColor("")
    settestFont("font-semibold")
    setissueFont("font-light")

  }
  const issueOnClickHandler= ()=>{
    setTabValue("issues")
    setIssueborderColor("border-navbar-upgrade")
    setTestborderColor("")
    settestFont("font-light")
    setissueFont("font-semibold")


  }
  return (
    
    <div className="flex flex-col filter drop-shadow-lg bg-white h-full max-h-screen  ">
      <div className="flex justify-around pt-2">
        <span className={`flex flex-col pb-4 cursor-pointer border-b-2 ${testBorderColor} ${testFont} `} onClick={testOnClickHandler}>RECENT TESTS
          
        </span>
        <span className={`flex flex-col pb-4 cursor-pointer border-b-2 ${issueBorderColor} ${issueFont}`} onClick={issueOnClickHandler}>RECENT ISSUES
        
        </span>

      </div>
      {/* for tests */}
      {tabValue=="tests" && (
      <div className="flex flex-col pl-4 ">
       <a className="mb-4 border-solid border-b-2 pt-2">Live | tarunsinghtanwar5</a>
        <a className="mb-4 border-solid border-b-2  pt-2">Live | john</a>
        <a className="mb-4 border-solid border-b-2  pt-2"> Testing area</a>
        </div>
      )}

        {/* for issues */}
        {tabValue=="issues" && (
         <div className="flex flex-col pl-4">
       <a className="mb-4 border-solid border-b-2 pt-2">Issues raised</a>
        <a className="mb-4 border-solid border-b-2 pt-2">Past Issues</a>
        <a className="mb-4 border-solid border-b-2 pt-2">New Issues</a>
        </div>
        )}
      <div  className="flex"></div>

    </div>
    
  )
}

export default History
