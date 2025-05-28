import { AITransformTools } from "@/constants/data";
import Image from "next/image";
import ImageUpload from "./ImageUpload";

const AITransformSettings = () => {
	return (
		<div>
			<ImageUpload />
			<h2>AI Transform</h2>
			<div className="grid grid-cols-2 gap-4 mt-2">
				{AITransformTools.map((item, index) => (
					<div key={index} className="flex flex-col items-center">
						<Image
							width={500}
							height={500}
							src={item.image}
							alt={item.name}
							className="w-full h-[70px] object-cover rounded-xl"
						/>
						<h2 className="text-xs">{item.name}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default AITransformSettings;
