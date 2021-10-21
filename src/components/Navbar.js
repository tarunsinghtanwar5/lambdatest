import React, { useState } from "react";
import dropdown from "../assets/navbar/dropdown-menu.svg";
import notification from "../assets/navbar/notification.svg";
import user from "../assets/navbar/user.svg";
import upgrade from "../assets/navbar/upgrade.svg";
import Dropdown from "./Dropdown";

function Navbar() {
  const [showDropDown, setshowDropDown] = useState(false);
  const dropDownHandler = () => {
    setshowDropDown((showDropDown) => !showDropDown);
    
  };
  const [showUserProfile, setshowUserProfile] = useState(false);
  const profileHandler = () => {
    setshowUserProfile((showUserProfile) => !showUserProfile);
  };
  return (
    <div className="flex justify-end border-solid border-2 w-full filter drop-shadow-lg items-center z-10 ">
      <div className="relative">
        <img src={dropdown} className="m-2" onClick={dropDownHandler} />
        {showDropDown && (
          <Dropdown>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Account settings
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Support
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                License
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </Dropdown>
        )}
      </div>
      <button className="m-2 rounded-full border-solid border-2 pl-4 pr-4 pt-1 pb-1 w-36 h-7 text-sm leading-4">
        Configure Tunnel
      </button>
      <button className="m-2 rounded-full border-solid border-2 pl-4 pr-4 pt-1 pb-1 bg-navbar-upgrade w-22 h-7 text-sm leading-4 text-white flex ">
        <img src={upgrade} className="mr-2" />
        Upgrade
      </button>
      <img src={notification} className="m-2 h-6 w-6" />
      <div className="relative">
        <img src={user} className="m-1" onClick={profileHandler}/>
        {showUserProfile && <Dropdown>
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Account settings
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Support
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              License
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            </form>
          </div>
        </Dropdown>
         }
        
      </div>
    </div>
  );
}

export default Navbar;
