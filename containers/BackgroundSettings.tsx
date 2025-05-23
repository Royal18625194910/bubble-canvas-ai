import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { useState } from "react";
import ColorPickerEditor from "./ColorPickerEditor";

const BackgroundSettings = () => {
	const [bgColor, setBgColor] = useState("#ffffff");
	const { canvasEditor } = useCanvasEditorStore();
	const onColorChange = (color: string) => {
		setBgColor(color);
		canvasEditor?.set({
			backgroundColor: color,
			backgroundImage: null,
		});
		canvasEditor?.renderAll();
	};
	return (
		<div className="flex flex-col items-center mt-4">
			<ColorPickerEditor
				value={bgColor}
				onColorChange={(color) => onColorChange(color)}
			/>
		</div>
	);
};

export default BackgroundSettings;
