import React from "react";

function Dropdown(props) {
  return (

          <div
            className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            {props.children}
          </div>
  );
}

export default Dropdown;
