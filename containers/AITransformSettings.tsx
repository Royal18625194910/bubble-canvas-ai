import { AITransformTool, AITransformTools } from "@/constants/data";
import Image from "next/image";
import { useState } from "react";
import ImageUpload from "./ImageUpload";

const AITransformSettings = () => {
	const [seletedAI, setSelectedAI] = useState<AITransformTool | null>(null);
	return (
		<div>
			<ImageUpload seletedAI={seletedAI} />
			<h2>AI Transform</h2>
			<div className="grid grid-cols-2 gap-4 mt-2">
				{AITransformTools.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-center"
						onClick={() => setSelectedAI(item)}>
						<Image
							width={500}
							height={500}
							src={item.image}
							alt={item.name}
							className="w-full h-[70px] object-cover rounded-xl"
							unoptimized={true}
						/>
						<h2 className="text-xs">{item.name}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default AITransformSettings;
