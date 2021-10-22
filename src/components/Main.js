import React from 'react';
import Automation from './Automation';
import Graph from './Graph';
import History from './History';
import Integrations from './Integrations';
import Navbar from './Navbar';
import Profile from './Profile';
import Realtime from './Realtime';

function Main() {
	return (
		<div id="maindiv" className="flex w-full flex-col bg-bg-main h-full">
			<Navbar />
			<div className="flex h-full ">
				{/* 3 conts and 1 graph  */}
				<div className="flex w-3/4 flex-col gap-y-4 bg-bg-main mt-2	">
					{/* 3 conts */}
					<div className="flex h-1/2 gap-x-2 pl-2 pr-2  ">
						<div className="w-1/3 h-full ">
							<Realtime />
						</div>
						<div className="w-1/3 h-full">
							<Automation />
						</div>
						<div className="w-1/3 h-full">
							<Integrations />
						</div>
					</div>
					<div className="h-1/2 w-full pb-10 ">
						<Graph />
					</div>
				</div>

				<div className="flex flex-col w-1/4 m-2">
					<div className=" h-1/6 w-full bg-bg-main">
						<Profile />
					</div>
					<div className=" h-5/6 w-100% mt-6">
						<History />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
