"use client";
import React from "react";
import SideBar from "./_components/SideBar";
import WorkSpaceHeader from "./_components/WorkSpaceHeader";

const WorkSpaceLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<WorkSpaceHeader />
			<div className="flex">
				<SideBar />
				{children}
			</div>
		</div>
	);
};

export default WorkSpaceLayout;
