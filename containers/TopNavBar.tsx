import ShapeSettings from "@/containers/ShapeSettings";
import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { useState } from "react";

const TopNavBar = () => {
	const { canvasEditor } = useCanvasEditorStore();
	const [topShapeShow, setTopShapeShow] = useState(false);

	if (canvasEditor) {
		canvasEditor.on("selection:created", function (e) {
			console.log("selection:created", e);
			const activeObject = canvasEditor?.getActiveObject();
			if (activeObject) {
				setTopShapeShow(true);
			}
		});

		canvasEditor.on("selection:cleared", function (e) {
			console.log("selection:cleared", e);
			setTopShapeShow(false);
		});
	}

	return (
		<div className="p-3 h-[60px] bg-white">
			{topShapeShow && <ShapeSettings />}
		</div>
	);
};

export default TopNavBar;
