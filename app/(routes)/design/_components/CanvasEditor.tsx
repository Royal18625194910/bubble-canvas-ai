import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { Canvas } from "fabric";
import { useEffect, useRef, useState } from "react";

type CanvasEditorProps = {
	designInfo: any;
};

const CanvasEditor = (props: CanvasEditorProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [canvas, setCanvas] = useState<Canvas | null>(null);
	const { canvasEditor, setCanvasEditor } = useCanvasEditorStore();
	useEffect(() => {
		if (canvasRef.current && props.designInfo) {
			const scaleFactor = window.devicePixelRatio || 1;
			const initCanvas = new Canvas(canvasRef.current, {
				backgroundColor: "#ffffff",
				width: props.designInfo.width / scaleFactor,
				height: props.designInfo.height / scaleFactor,
			});
			console.log("scaleFactor", scaleFactor, props.designInfo);
			initCanvas.set({
				width: props.designInfo.width * scaleFactor,
				height: props.designInfo.height * scaleFactor,
				zoom: 1 / scaleFactor,
			});
			initCanvas.renderAll();
			setCanvas(initCanvas);
			setCanvasEditor(initCanvas);
			return () => {
				initCanvas.dispose();
			};
		}
	}, [props.designInfo]);
	return (
		<div className="flex-1 bg-slate-200 w-full h-screen flex items-center justify-center">
			<canvas ref={canvasRef} id="canvas" />
		</div>
	);
};

export default CanvasEditor;
