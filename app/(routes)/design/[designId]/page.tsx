"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import DesignHeader from "../_components/DesignHeader";
import SideBar from "../_components/SideBar";

const DesignIdPage = () => {
	const params = useParams();
	const designInfo = useQuery(api.designs.GetDesign, {
		id: params.designId as any,
	});
	console.log("id", params.designId, designInfo);
	return (
		<div>
			<DesignHeader designInfo={designInfo} />
			<div>
				<SideBar designInfo={designInfo} />
			</div>
		</div>
	);
};

export default DesignIdPage;
