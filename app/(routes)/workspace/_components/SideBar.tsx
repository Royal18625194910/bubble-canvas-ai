"use client";
import { WorkSpaceMenus } from "@/constants/data";
import { PlusIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import CustomDialog from "./CustomDialog";

const SideBar = () => {
	const router = useRouter();
	const path = usePathname();

	return (
		<div className="h-screen shadow-md bg-purple-100 flex-col items-center flex pt-4">
			{/* 创建 */}
			<CustomDialog>
				<div className="text-purple-800 flex flex-col justify-center items-center">
					<div className="w-10 h-10 flex justify-center p-1 items-center bg-purple-800 rounded-full">
						<PlusIcon className="w-9 h-9 text-gray-100 cursor-pointer" />
					</div>
					<span className="text-base">Create</span>
				</div>
			</CustomDialog>
			{/* 菜单 */}
			{WorkSpaceMenus.map((menu, index) => (
				<div
					key={index}
					onClick={() => router.push(menu.path)}
					className=" flex  flex-col justify-center gap-2 text-purple-800 items-center p-2 ">
					<div
						className={`hover:bg-purple-300/80  rounded-2xl p-2 cursor-pointer ${menu.path == path && "bg-purple-300/80"}`}>
						<menu.icon className="w-7 h-7" />
					</div>
					<span className="text-sm">{menu.name}</span>
				</div>
			))}
		</div>
	);
};

export default SideBar;
