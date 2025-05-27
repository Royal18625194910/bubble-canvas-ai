import { Slider } from "@/components/ui/slider";
import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { useState } from "react";

const Radius = () => {
	const [radius, setRadius] = useState(0);
	const { canvasEditor } = useCanvasEditorStore();
	const onRadiusChange = (value: number) => {
		setRadius(value);
		const activeObject = canvasEditor?.getActiveObject();
		if (activeObject) {
			activeObject.set({
				rx: value,
				ry: value,
			});
			canvasEditor?.add(activeObject);
			canvasEditor?.renderAll();
		}
	};
	return (
		<div>
			<h2>Radius</h2>
			<Slider
				defaultValue={[1]}
				onValueChange={(v) => onRadiusChange(v[0])}
				min={0}
				max={100}
			/>
		</div>
	);
};

export default Radius;
