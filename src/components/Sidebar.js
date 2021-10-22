import React, { useState } from "react";
import arrow from "../assets/arrow.svg";
import lambda_mini from "../assets/lambdatest_logo.jpg";
import logo from "../assets/logo.svg";
import { SIDEBAR_DATA } from "../constants/sidebar";
import SidebarListItem from "./SidebarListItem";
let logo_img = logo;

let custom_margin = 40;
let rotation = "transform rotate-0";
function Sidebar() {
  const [display, setDisplay] = useState(true);
  const hideSideBarHandler = () => {
    setDisplay((display) => !display);
    if (display == false) {
      logo_img = logo;
      custom_margin = 40;
      rotation = "transform rotate-0";
    } else {
      logo_img = lambda_mini;
      custom_margin = 8;
      rotation = "transform rotate-180";
    }
  };

  return (
    <div
      className={`${
        display ? `w-44` : `w-14`
      } flex flex-col bg-navbar-upgrade relative`}
    >
      {/* lambdatest logo */}
      <div className="">
        <img src={logo_img} className=" bg-navbar-upgrade h-11 w-40 pl-2.5 " />
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
        className={`absolute ml-${custom_margin}  z-20 w-8 ${rotation} mt-2.5`}
        onClick={hideSideBarHandler}
      >
        <img src={arrow} />
      </button>
    </div>
  );
}

export default Sidebar;
