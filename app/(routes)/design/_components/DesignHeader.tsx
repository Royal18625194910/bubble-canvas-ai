import images from "@/constants/images";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";

type DesignHeaderProps = {
	designInfo: any;
};

const DesignHeader = (props: DesignHeaderProps) => {
	return (
		<div className="flex items-center justify-between p-3 bg-gradient-to-r from-sky-500 via-blue-400 to-purple-500">
			<Image src={images.logo} alt="logo" width={100} height={50} />
			<input
				placeholder="Design Name"
				className="text-white border-none outline-none bg-transparent placeholder:text-white"
				value={props.designInfo?.name}
			/>
			<UserButton />
		</div>
	);
};

export default DesignHeader;
