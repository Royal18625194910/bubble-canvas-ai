"use client";
import { useParams } from "next/navigation";

const DesignIdPage = () => {
	const params = useParams();
	console.log("id", params.designId);
	return <div>DesignIdPage--{params.designId}</div>;
};

export default DesignIdPage;
