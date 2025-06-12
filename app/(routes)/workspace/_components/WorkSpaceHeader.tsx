"use client";
import images from "@/constants/images";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";
import { useRouter } from "next/navigation";

const WorkSpaceHeader = () => {
	const router = useRouter();
	return (
		<div className="flex justify-between items-center px-4 py-2 shadow-lg">
			<Image
				src={images.logo}
				alt="logo"
				width={100}
				height={100}
				onClick={() => router.push("/")}
			/>
			<UserButton />
		</div>
	);
};

export default WorkSpaceHeader;
