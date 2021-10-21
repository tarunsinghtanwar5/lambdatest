import React from 'react';

function SidebarListItem({ label, logo, url, children ,display}) {
	
	return (
		<a href={url} className="flex items-center pl-2 h-full ">
			<img src={logo} className="object-contain h-sidebar-icon-dimension w-sidebar-icon-dimension" />
    
			<span className="pl-2 pr-1 text-gray-500 hover:text-white text-xs w-44">{label} </span>
		
		</a>
	);
}

export default SidebarListItem;
