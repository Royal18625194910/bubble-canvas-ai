"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUserStore } from "@/store/useUser.Store";
import { useConvex } from "convex/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import CustomDialog from "./CustomDialog";

const RecentDesign = () => {
	const convex = useConvex();

	const { user } = useUserStore();
	const [designList, setDesignList] = useState<any[]>([]);
	const getDesigns = async () => {
		console.log("user", user);
		if (!user) return;
		const designs = await convex.query(api.designs.GetDesignsByUid, {
			uid: user?._id,
		});
		setDesignList(designs);
	};

	useEffect(() => {
		getDesigns();
	}, []);

	return (
		<div className="mt-6">
			<h1 className="text-3xl font-bold">Recent Design</h1>
			{!designList.length && (
				<div className="flex flex-col items-center pt-8">
					<div className="w-[140px] h-[140px] rounded-full bg-gray-200 "></div>
					<p className="text-xl mt-10">
						You don't design any!!! Create one new now
					</p>
					<CustomDialog>
						<Button className="mt-6">Create New</Button>
					</CustomDialog>
				</div>
			)}
			<div className="grid lg:grid-cols-5 lg:gap-4 mt-4">
				{designList?.map((design) => (
					<div key={design._id} className="bg-gray-50 rounded-lg">
						<Image
							src={design.imagePreview}
							alt={design.name}
							width={500}
							height={500}
							className="w-full h-[300px] object-cover rounded-xl"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentDesign;
