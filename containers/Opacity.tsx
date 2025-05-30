import { Slider } from "@/components/ui/slider";
import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { useState } from "react";

const Opacity = () => {
	const [opacity, setOpacity] = useState(0);
	const { canvasEditor } = useCanvasEditorStore();

	const onOpacityChange = (value: number) => {
		setOpacity(value);
		console.log("onOpacityChange", value);

		const activeObject = canvasEditor?.getActiveObject();
		if (activeObject) {
			activeObject.set({ opacity: value });
			canvasEditor?.add(activeObject);
			canvasEditor?.renderAll();
		}
	};

	return (
		<div>
			<h2>Opacity</h2>
			<Slider
				defaultValue={[0.1]}
				onValueChange={(v) => onOpacityChange(v[0])}
				min={0}
				max={0.1}
				step={0.001}
			/>
		</div>
	);
};

export default Opacity;
