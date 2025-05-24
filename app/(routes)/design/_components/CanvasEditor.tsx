import TopNavBar from "@/components/TopNavBar";
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

	// 初始化canvas
	useEffect(() => {
		if (canvasRef.current && props.designInfo) {
			const scaleFactor = window.devicePixelRatio || 1;
			const initCanvas = new Canvas(canvasRef.current, {
				backgroundColor: "#ffffff",
				width: props.designInfo.width / scaleFactor,
				height: props.designInfo.height / scaleFactor,
				preserveObjectStacking: true,
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

	// 监听删除Object
	const handleDeleteKeyDown = (e: any) => {
		console.log("e", e);
		if (e.key === "Backspace" || e.key === "Delete") {
			if (canvasEditor) {
				const activeObject = canvasEditor.getActiveObject();
				if (activeObject) {
					canvasEditor.remove(activeObject);
					canvasEditor.renderAll();
				}
			}
		}
	};

	// 监听删除Object
	useEffect(() => {
		if (canvasEditor) {
			document.addEventListener("keydown", handleDeleteKeyDown);
			return () => {
				document.removeEventListener("keydown", handleDeleteKeyDown);
			};
		}
	}, [canvasEditor]);
	return (
		<div className="flex-1 bg-slate-200 w-full h-screen">
			<div>
				<TopNavBar />
			</div>
			<div className="mt-12 flex items-center justify-center">
				<canvas ref={canvasRef} id="canvas" />
			</div>
		</div>
	);
};

export default CanvasEditor;
