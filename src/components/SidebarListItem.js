import React from 'react';

function SidebarListItem({ label, logo, url, children }) {
	return (
		<a href={url} className="flex items-center bg-bg-primary pl-2 h-full ">
			<img src={logo} className="object-contain h-8 w-8 " />

			<span className="pl-2 pr-1 text-gray-500 hover:text-white text-xs ">{label} </span>
		</a>
	);
}

export default SidebarListItem;
