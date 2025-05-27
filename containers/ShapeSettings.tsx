import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { shapeTools } from "@/constants/data";
import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { Trash } from "lucide-react";

const ShapeSettings = () => {
	const { canvasEditor } = useCanvasEditorStore();
	const handleDelete = () => {
		const activeObject = canvasEditor?.getActiveObject();
		if (activeObject) {
			canvasEditor?.remove(activeObject);
			canvasEditor?.renderAll();
		}
	};
	return (
		<div className="flex items-center justify-center gap-6">
			{shapeTools.map((shape, index) => (
				<Popover key={index}>
					<PopoverTrigger asChild>
						<div className="w-10 h-10 hover:bg-gray-100 rounded-md cursor-pointer flex items-center justify-center">
							<shape.icon />
						</div>
					</PopoverTrigger>
					<PopoverContent>{shape.component}</PopoverContent>
				</Popover>
			))}
			<Trash onClick={handleDelete} />
		</div>
	);
};

export default ShapeSettings;
