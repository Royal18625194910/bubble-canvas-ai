import { Shapes, StickerList } from "@/constants/data";
import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { Circle, FabricImage, Line, Rect, Triangle } from "fabric";
import Image from "next/image";

const ElementSettings = () => {
	const properties = {
		left: 100,
		top: 100,
		width: 100,
		height: 100,
		radius: 50,
		fill: "black",
		stroke: "black",
		strokeWidth: 1,
	};

	const { canvasEditor } = useCanvasEditorStore();
	const onShapeSelect = (shape: any) => {
		console.log(shape);
		if (shape === "Rectangle") {
			const rectRef = new Rect({ ...properties });
			canvasEditor?.add(rectRef);
			canvasEditor?.renderAll();
		} else if (shape === "Circle") {
			const circleRef = new Circle({ ...properties });
			canvasEditor?.add(circleRef);
			canvasEditor?.renderAll();
		} else if (shape === "Triangle") {
			const triangleRef = new Triangle({ ...properties });
			canvasEditor?.add(triangleRef);
			canvasEditor?.renderAll();
		} else if (shape === "Star") {
		} else if (shape === "Line") {
			const lineRef = new Line([100, 100, 200, 100], {
				...properties,
				strokeWidth: 5,
			});
			canvasEditor?.add(lineRef);
			canvasEditor?.renderAll();
		}
	};

	const onStickerSelect = async (sticker: string) => {
		if (!canvasEditor) return;
		const canvasImg = await FabricImage.fromURL(sticker, {
			crossOrigin: "anonymous",
		});
		console.log("onStickerSelect", sticker, canvasImg);
		canvasEditor?.add(canvasImg);
		canvasEditor?.renderAll();
	};

	return (
		<div>
			<div className="grid grid-cols-2 gap-4 px-3 py-2">
				{Shapes.map((shape, index) => (
					<div
						key={index}
						onClick={() => onShapeSelect(shape.name)}
						className="flex justify-center items-center">
						<shape.icon size={100} fill="black" />
					</div>
				))}
			</div>
			<h2>Sticks</h2>
			<div className="grid grid-cols-2 gap-4 px-3 py-2 h-[70vh] overflow-auto">
				{StickerList.map((sticker, index) => (
					<Image
						key={index}
						src={sticker}
						alt={index + ""}
						width={100}
						height={100}
						onClick={() => onStickerSelect(sticker)}
						className="cursor-pointer"
					/>
				))}
			</div>
		</div>
	);
};

export default ElementSettings;
