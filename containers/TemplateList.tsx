import { api } from "@/convex/_generated/api";
import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { useQuery } from "convex/react";
import Image from "next/image";

const TemplateList = () => {
	const templates = useQuery(api.templates.getAllTemplates);
	console.log("getAllTemplates", templates);
	const { canvasEditor } = useCanvasEditorStore();

	const onTemplateSelect = (item: any) => {
		if (canvasEditor) {
			console.log("item.canvasData", item);
			canvasEditor.loadFromJSON(item.jsonData, () => {
				canvasEditor.requestRenderAll();
			});
		}
	};

	return (
		<div className="grid grid-cols-2 gap-2">
			{templates?.map((item) => (
				<div key={item._id} className="bg-gray-50 p-2 rounded-lg">
					<Image
						src={item.imagePreview}
						alt={item.name}
						width={500}
						height={500}
						className="w-full h-[100px] object-cover rounded-xl"
						onClick={() => onTemplateSelect(item)}
					/>
				</div>
			))}
		</div>
	);
};

export default TemplateList;
