import { Slider } from "@/components/ui/slider";
import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { useState } from "react";

const BorderWidth = () => {
	const [value, setValue] = useState(0);
	const { canvasEditor } = useCanvasEditorStore();
	const onWithChange = (value: number) => {
		setValue(value);
		console.log("onWithChange", value);
		const activeObject = canvasEditor?.getActiveObject();
		console.log("activeObject", activeObject);
		if (activeObject) {
			activeObject.set({ strokeWidth: value });
			canvasEditor?.add(activeObject);
			canvasEditor?.renderAll();
		}
	};
	return (
		<div>
			<h2>BorderWidth</h2>
			<Slider
				defaultValue={[0]}
				value={[value]}
				onValueChange={(v) => onWithChange(v[0])}
				max={100}
				step={1}
			/>
		</div>
	);
};

export default BorderWidth;
