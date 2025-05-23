import { SideBarMenus } from "@/constants/data";
import { useState } from "react";
import CanvasEditor from "./CanvasEditor";
import SideBarSettings from "./SideBarSettings";

type SideBarProps = {
	designInfo: any;
};

const SideBar = (props: SideBarProps) => {
	const [selectOption, setSelectOption] = useState(SideBarMenus[0]);
	return (
		<div className="flex">
			<div className="flex w-[100px] flex-col gap-6 pt-4 h-screen shadow-md">
				{SideBarMenus.map((menu, index) => (
					<div
						key={index}
						onClick={() => setSelectOption(menu)}
						className={`py-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md ${menu.name === selectOption.name ? "bg-gray-100" : ""}`}>
						<menu.icon />
						{menu.name}
					</div>
				))}
			</div>
			<SideBarSettings selectOption={selectOption} />
			<CanvasEditor designInfo={props.designInfo} />
		</div>
	);
};

export default SideBar;
