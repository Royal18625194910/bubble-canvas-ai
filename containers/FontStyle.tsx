import { Bold, Italic, Underline } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
const FontStyle = () => {
	const { canvasEditor } = useCanvasEditorStore();
	const activeObject = canvasEditor?.getActiveObject();
	const onFontStyleClikck = (value: string) => {
		// Implement logic to handle font style change
		console.log("handleFontStyleChange", value);
		const activeObject = canvasEditor?.getActiveObject();
		if (!activeObject) return;
		console.log("activeObject", activeObject);
		if (value === "bold") {
			activeObject.set({
				fontWeight:
					(activeObject as any).fontWeight === "bold" ? "normal" : "bold",
			});
		} else if (value === "italic") {
			activeObject.set({
				fontStyle:
					(activeObject as any).fontStyle === "italic" ? "normal" : "italic",
			});
		} else if (value === "underline") {
			activeObject.set({
				underline: (activeObject as any).underline ? false : true,
			});
		}

		canvasEditor?.add(activeObject);
		canvasEditor?.renderAll();
	};

	return (
		<div className="flex gap-4">
			<Toggle
				aria-label="Toggle italic"
				onClick={() => onFontStyleClikck("bold")}>
				<Bold />
			</Toggle>
			<Toggle
				aria-label="Toggle italic"
				onClick={() => onFontStyleClikck("italic")}>
				<Italic />
			</Toggle>
			<Toggle
				aria-label="Toggle italic"
				onClick={() => onFontStyleClikck("underline")}>
				<Underline />
			</Toggle>
		</div>
	);
};

export default FontStyle;
