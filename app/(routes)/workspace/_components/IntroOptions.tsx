"use client";
import { WorkSpaceProducts } from "@/constants/data";
import { api } from "@/convex/_generated/api";
import { useUserStore } from "@/store/useUser.Store";
import { useMutation } from "convex/react";
import { BsYoutube } from "react-icons/bs";
import RecentDesign from "./RecentDesign";

const IntroOptions = () => {
	const CreateNewDesignMutation = useMutation(api.designs.CreateNewDesign);
	const user = useUserStore((state) => state.user);

	const handleAddNewDesign = async (option: any) => {
		// const res = await CreateNewDesignMutation({
		// 	name: option.name,
		// 	width: option.width,
		// 	height: option.height,
		// 	uid: user._id,
		// });
		console.log("handleAddNewDesign", option);
	};

	return (
		<div className="pt-4 px-6">
			<div className="w-full relative h-[300px] bg-blue-400 rounded-2xl">
				<span className="absolute text-white text-2xl bottom-3 left-4">
					WorkSpace
				</span>
			</div>
			{/* 产品模板 */}
			<div className="w-full pt-3 h-[100px] flex  items-center justify-between px-14">
				{WorkSpaceProducts.map((item, index) => (
					<div
						onClick={() => handleAddNewDesign(item)}
						key={index}
						className="mt-4 flex flex-col items-center justify-center gap-1 cursor-pointer">
						<div className="w-[60px] h-[60px] flex rounded-full hover:scale-125 transition-all justify-center items-center">
							<BsYoutube size={50} color="red" />
							{/* <FaTiktok size={50} color="black" /> */}
						</div>
						<span>{item.name}</span>
					</div>
				))}
			</div>
			{/* 最近设计 */}
			<RecentDesign />
		</div>
	);
};

export default IntroOptions;
