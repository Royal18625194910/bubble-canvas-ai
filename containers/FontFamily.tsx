import { FontFamilyList } from "@/constants/data";
import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";

const FontFamily = () => {
	const { canvasEditor } = useCanvasEditorStore();

	const onFontChange = (value: string) => {
		console.log("onFontChange", value);

		const activeObject = canvasEditor?.getActiveObject();
		if (activeObject) {
			activeObject.set({ fontFamily: value });
			canvasEditor?.add(activeObject);
			canvasEditor?.renderAll();
		}
	};
	return (
		<div className="flex flex-col h-[200px] gap-2 overflow-auto">
			{FontFamilyList.map((item, index) => (
				<h2
					onClick={() => onFontChange(item)}
					key={index}
					style={{ fontFamily: item }}
					className="w-full text-[16px] p-2 font-medium bg-gray-50 rounded-xl">
					{item}
				</h2>
			))}
		</div>
	);
};

export default FontFamily;
