import React, { useState } from "react";
import { SIDEBAR_DATA } from "../constants/sidebar";
import SidebarListItem from "./SidebarListItem";
import logo from "../assets/logo.svg";
import arrow from '../assets/arrow.svg'
import arrow_new from '../assets/arrow_new.png'
import lambda_mini from '../assets/lambdatest_logo.jpg'
let logo_img=logo;

function Sidebar() {
  const [display, setDisplay] = useState(false);
  const hideSideBarHandler = () => {
    setDisplay((display) => !display);
    if(display==false){
    logo_img=logo;
    }
    else {
    logo_img=lambda_mini;
    }
    // if(display==true){
    // const customClass=`overflow-hidden`
  };

  return (
    <div
      className={`${
        display ? `w-44` : `w-14`
      } flex flex-col bg-navbar-upgrade relative`}
    >
      {/* lambdatest logo */}
      <div className="w-">
        <img src={logo_img} className=" bg-navbar-upgrade h-11 " />
      </div>

      <div
        className={` w-full flex flex-col h-screen bg-bg-primary pb-40  `}
        id="sidebardiv"
      >
        {SIDEBAR_DATA.map((sidebar) => {
          return <SidebarListItem {...sidebar} display={display} />;
        })}
      </div>
      <button className="absolute ml-90% z-20 w-8" onClick={hideSideBarHandler}><img  src={arrow_new}/></button>
    </div>
  );
}

export default Sidebar;
