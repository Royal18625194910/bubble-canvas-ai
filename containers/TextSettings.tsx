import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { FabricText } from "fabric";

const TextSettings = () => {
	const { canvasEditor } = useCanvasEditorStore();
	const onAddText = (type: string) => {
		console.log("Add Text", type);
		if (type === "Heading") {
			const textRef = new FabricText("Heading", {
				fontSize: 30,
				fontWeight: "700",
				fontFamily: "Arial",
				fill: "black",
				left: 100,
				top: 100,
			});
			canvasEditor?.add(textRef);
		} else if (type === "SubHeading") {
			const textRef = new FabricText("SubHeading", {
				fontSize: 20,
				fontWeight: "500",
				fontFamily: "Arial",
				fill: "black",
				left: 100,
				top: 100,
			});
			canvasEditor?.add(textRef);
		} else if (type === "Para") {
			const textRef = new FabricText("Para", {
				fontSize: 18,
				fontWeight: "400",
				fontFamily: "Arial",
				fill: "black",
				left: 100,
				top: 100,
			});
			canvasEditor?.add(textRef);
		}
	};
	return (
		<div className="flex flex-col gap-3">
			<h2
				onClick={() => onAddText("Heading")}
				className="font-bold text-3xl p-3 bg-slate-100 rounded-xl">
				Heading
			</h2>
			<h2
				onClick={() => onAddText("SubHeading")}
				className="font-medium text-xl p-3 bg-slate-100 rounded-xl">
				SubHeading
			</h2>
			<h2
				onClick={() => onAddText("Para")}
				className="font-normal text-md p-3 bg-slate-100 rounded-xl">
				Paragraph
			</h2>
		</div>
	);
};

export default TextSettings;
