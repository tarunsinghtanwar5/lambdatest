import React, { useState } from 'react';

function SidebarListItem({ label, logo, url ,display}) {
  const [isclicked, setIsClicked] = useState("border-gray-300");
  const darkBackgroundHandler = (e) => {
    e.preventDefault();
    setIsClicked(`bg-hover-sidebar`)
  }
  return (
    <a href={url} className={`first:mt-20 flex items-center pl-2 border-b-1 border-opacity-100 ${isclicked} hover:bg-hover-sidebar h-13`} onClick={darkBackgroundHandler}>
      <img src={logo} className="object-contain h-sidebar-icon-dimension w-sidebar-icon-dimension" />
      <span className={`pl-2 pr-1 text-gray-500 hover:text-white text-xs w-44 ${display?``:`hidden`}`}>{label} </span>
    </a>
  );
}

export default SidebarListItem;
