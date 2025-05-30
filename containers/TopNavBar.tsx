import ShapeSettings from "@/containers/ShapeSettings";
import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { useState } from "react";
import TextSettingsNavBar from "./TextSettingsNavBar";

const TopNavBar = () => {
	const { canvasEditor } = useCanvasEditorStore();
	const [topShapeShow, setTopShapeShow] = useState(false);
	const [textNavBarShow, setTextNavBarShow] = useState(false);

	if (canvasEditor) {
		canvasEditor.on("selection:created", function (e) {
			const activeObject = canvasEditor?.getActiveObject();
			console.log("activeObject", activeObject);
			if (activeObject?.type === "text") {
				setTopShapeShow(false);
				setTextNavBarShow(true);
			} else {
				setTopShapeShow(true);
				setTextNavBarShow(false);
			}
		});

		canvasEditor.on("selection:updated", function (e) {
			console.log("selection:updated", e);
			const activeObject = canvasEditor?.getActiveObject();
			console.log("activeObject", activeObject);
			if (activeObject?.type === "text") {
				setTopShapeShow(false);
				setTextNavBarShow(true);
			} else {
				setTopShapeShow(true);
				setTextNavBarShow(false);
			}
		});

		canvasEditor.on("selection:cleared", function (e) {
			console.log("selection:cleared", e);
			setTopShapeShow(false);
			setTextNavBarShow(false);
		});
	}

	return (
		<div className="p-3 h-[60px] bg-white">
			{topShapeShow && <ShapeSettings />}
			{textNavBarShow && <TextSettingsNavBar />}
		</div>
	);
};

export default TopNavBar;
