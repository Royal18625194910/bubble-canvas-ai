import images from "@/constants/images";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";

const WorkSpaceHeader = () => {
	return (
		<div className="flex justify-between items-center px-4 py-2 shadow-lg">
			<Image src={images.logo} alt="logo" width={100} height={100} />
			<UserButton />
		</div>
	);
};

export default WorkSpaceHeader;
