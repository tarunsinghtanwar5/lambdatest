import React, { useState } from "react";
import dropdown from "../assets/navbar/dropdown-menu.svg";
import notification from "../assets/navbar/notification.svg";
import user from "../assets/navbar/user.svg";
import upgrade from "../assets/navbar/upgrade.svg";
import Dropdown from "./Dropdown";
import automation from "../assets/navbar/dropdownSqaure/automation-menu.svg";
import integration from "../assets/navbar/dropdownSqaure/integration-menu.svg";
import ltbrowser from "../assets/navbar/dropdownSqaure/lt-browser-menu.svg";
import realtime from "../assets/navbar/dropdownSqaure/realtime-menu.svg";
import responsive from "../assets/navbar/dropdownSqaure/responsive-menu.svg";
import screenshot from "../assets/navbar/dropdownSqaure/screenshot-menu.svg";
import smarttesting from "../assets/navbar/dropdownSqaure/smart-testing-menu.svg";

function Navbar() {
  const [showDropDown, setshowDropDown] = useState(false);
  const dropDownHandler = () => {
    setshowDropDown((showDropDown) => !showDropDown);
    setshowUserProfile(false);
  };
  const [showUserProfile, setshowUserProfile] = useState(false);
  const profileHandler = () => {
    setshowUserProfile((showUserProfile) => !showUserProfile);
    setshowDropDown(false);
  };
  return (
    <div className="flex justify-end border-solid border-2 w-full filter drop-shadow-lg items-center z-10 ">
      <div className="relative">
        {/* sqaure dropdown menu */}
        <img src={dropdown} className="m-2" onClick={dropDownHandler} />
        {showDropDown && (
          <Dropdown>
            <div className="py-1 max-w-full" role="none">
          <div className="flex flex-wrap items-start justify-between p-2.5 pl-5 pr-5">
              <a className="text-xs hover:bg-gray-100 cursor-pointer">
                <img
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  src={realtime}
               />
                Realtime Test
              </a>

              <a className="text-xs hover:bg-gray-100 cursor-pointer">
                <img
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                  src={automation}
               />
                 Automation
              </a>
              <a className="text-xs hover:bg-gray-100 cursor-pointer">
                <img
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  src={screenshot}
                />
                  Screenshot Test
             </a>
              <a className="text-xs hover:bg-gray-100 cursor-pointer">
                <img
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  src={responsive}
                />
                  Responsive
              </a>
              <a className="text-xs hover:bg-gray-100 cursor-pointer">
                <img
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  src={smarttesting}
                />
                  Smart Test
              </a>
              <a className="text-xs hover:bg-gray-100 cursor-pointer">
                <img
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  src={integration}
               />
                 Integrations
              </a>
              <a className="text-xs hover:bg-gray-100 cursor-pointer">
                <img
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  src={ltbrowser}
                />
                  LT-Browser
              </a>
              </div>
            </div>
          </Dropdown>
        )}
      </div>
      <button className="m-2 rounded-full border-solid border-2 pl-4 pr-4 pt-1 pb-1 w-36 h-7 text-xs leading-4 flex">
        Configure Tunnel  <span className="pl-2 ">?</span>
      </button>
      <button className="m-2 rounded-full border-solid border-2 pl-4 pr-4 pt-1 pb-1 bg-navbar-upgrade w-22 h-7 text-sm leading-4 text-white flex ">
        <img src={upgrade} className="mr-2" />
        Upgrade
      </button>
      <img src={notification} className="m-2 h-6 w-6" />

      {/* profile drop down */}
      <div className="relative">
        <img src={user} className="m-1" onClick={profileHandler} />
        {showUserProfile && (
          <Dropdown>
            <div className="py-1" role="none">
              <h2
                href="#"
                className="text-navbar-upgrade block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-group"
              >
                SETTINGS
              </h2>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-xs hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Profile
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-xs hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Manage Team
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-xs hover:bg-gray-100  "
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                Billing
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-xs border-b-2 hover:bg-gray-100 "
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Upgrade
              </a>
              <h2
                href="#"
                className="text-navbar-upgrade block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-group-2"
              >
                HELP
              </h2>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-xs hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0-2"
              >
                Help Center
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-xs border-b-2 hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1-2"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-xs hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2-2"
              >
                Log out
              </a>
            </div>
          </Dropdown>
        )}
      </div>
    </div>
  );
}

export default Navbar;
