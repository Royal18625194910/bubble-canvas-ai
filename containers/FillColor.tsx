import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { useState } from "react";
import ColorPickerEditor from "./ColorPickerEditor";

const FillColor = () => {
	const [color, setColor] = useState("#000000");
	const { canvasEditor } = useCanvasEditorStore();
	const onColorChange = (color: string) => {
		console.log("color", color);
		setColor(color);
		const activeObject = canvasEditor?.getActiveObject();
		if (activeObject) {
			activeObject.set({ fill: color });
			canvasEditor?.add(activeObject);
			canvasEditor?.renderAll();
		}
	};
	return (
		<div>
			<ColorPickerEditor
				value={color}
				onColorChange={(color) => onColorChange(color)}
			/>
		</div>
	);
};

export default FillColor;
