import React, { useState } from "react";
import arrow from "../assets/arrow.svg";
import lambda_mini from "../assets/lambdatest_logo.jpg";
import logo from "../assets/logo.svg";
import { SIDEBAR_DATA } from "../constants/sidebar";
import SidebarListItem from "./SidebarListItem";
let logoImg = logo;
let customMargin = 42;
let imageConfig = 'h-6 w-32 pl-2.5';
let rotation = "transform rotate-0";
function Sidebar() {
  const [display, setDisplay] = useState(true);
  const hideSideBarHandler = () => {
    setDisplay((display) => !display);
    if (display == false) {
      logoImg = logo;
      customMargin = 42;
      imageConfig = 'h-6 w-32 pl-2.5';
      rotation = "transform rotate-0";
    } else {
      logoImg = lambda_mini;
      customMargin = 8;
      imageConfig = 'h-10 w-10 pl-1';
      rotation = "transform rotate-180";
    }
  };

  return (
    <div
      className={`${
        display ? `w-180px` : `w-14`
      } flex flex-col bg-navbar-upgrade relative`}
    >
      <div className="flex items-center h-13">
        <img src={logoImg} className={`bg-navbar-upgrade ${imageConfig}`} />
      </div>

      <div
        className={` w-full flex flex-col h-screen bg-bg-primary pb-40  `}
        id="sidebardiv"
      >
        {SIDEBAR_DATA.map((sidebar) => {
          return <SidebarListItem {...sidebar} display={display} />;
        })}
      </div>
      <button
        className={`absolute ml-${customMargin}  z-20 w-8 ${rotation} mt-2.5`}
        onClick={hideSideBarHandler}
      >
        <img src={arrow} />
      </button>
    </div>
  );
}

export default Sidebar;
