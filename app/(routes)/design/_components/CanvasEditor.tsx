import TopNavBar from "@/containers/TopNavBar";
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
			console.log("scaleFactor", scaleFactor, props.designInfo.jsonTemplate);
			initCanvas.set({
				width: props.designInfo.width * scaleFactor,
				height: props.designInfo.height * scaleFactor,
				zoom: 1 / scaleFactor,
			});
			if (props.designInfo.jsonTemplate) {
				// 从jsonTemplate中加载数据
				initCanvas.loadFromJSON(props.designInfo.jsonTemplate, () => {
					initCanvas.requestRenderAll();
				});
			}
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
			if (!canvasEditor) return;
			const activeObject = canvasEditor.getActiveObject();
			if (!activeObject) return;
			canvasEditor.remove(activeObject);
			canvasEditor.renderAll();
		}
	};

	// 监听删除Object
	useEffect(() => {
		if (canvasEditor) {
			// 监听文本进入编辑模式事件
			canvasEditor.on("text:editing:entered", function () {
				// 进入编辑模式时，禁用全局 Delete 删除
				document.removeEventListener("keydown", handleDeleteKeyDown);
			});

			// 监听文本退出编辑模式事件
			canvasEditor.on("text:editing:exited", function () {
				// 退出编辑模式后，重新启用全局 Delete 删除
				document.addEventListener("keydown", handleDeleteKeyDown);
			});
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
