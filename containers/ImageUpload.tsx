import LoadingMask from "@/components/LoadingMask";
import { Button } from "@/components/ui/button";
import { AITransformTool } from "@/constants/data";
import { imagekit } from "@/lib/imagekit";
import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { FabricImage } from "fabric";
import { ImageUpIcon, LoaderIcon } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export type ImageUploadProps = {
	seletedAI: AITransformTool | null;
};

const ImageUpload = (props: ImageUploadProps) => {
	const [img, setImg] = useState<string | null>("");
	const [loading, setLoading] = useState(false);
	const upFileRef = useRef<any>();
	const { canvasEditor } = useCanvasEditorStore();
	const params = useParams();
	const onImageUpload = async (e: any) => {
		setLoading(true);
		const file = e.target.files[0];
		const imgUrl = URL.createObjectURL(file);
		// 上传imagekit
		const img = await imagekit.upload({
			file: file as any,
			fileName: params.designId + ".png",
		});
		console.log(file, imgUrl, img.url);
		setImg(img.url);
		setLoading(false);
	};

	const chooseImg = () => {
		upFileRef.current.click();
	};

	const addToCanvas = async () => {
		const canvasImg = await FabricImage.fromURL(img as string, {
			crossOrigin: "anonymous",
		});
		canvasEditor?.add(canvasImg);
		canvasEditor?.renderAll();
		setImg(null);
	};

	useEffect(() => {
		console.log("props.seletedAI", props.seletedAI);
		if (props.seletedAI && img) {
			setLoading(true);
			let imgUrl = img;
			if (img?.includes("?tr=")) {
				imgUrl = img + "," + props.seletedAI?.command;
			} else {
				imgUrl = img + "?tr=" + props.seletedAI?.command;
			}
			console.log("imgUrl", imgUrl);
			setImg(imgUrl);
			setLoading(false);
		}
	}, [props.seletedAI]);

	return (
		<div className="mb-4">
			<LoadingMask open={loading} />
			{img ? (
				<Image
					onClick={chooseImg}
					src={img}
					alt="uploaded image"
					width={300}
					height={200}
					className="h-[150px] w-full rounded-lg object-cover"
					loading="lazy"
				/>
			) : (
				<label
					onClick={chooseImg}
					className="cursor-pointer bg-gray-100 h-[100px]  p-4 rounded-lg flex flex-col items-center justify-center mb-4">
					<ImageUpIcon size={26} />
					<h2>Upload Image</h2>
				</label>
			)}
			<Button className="w-full mt-3" onClick={addToCanvas} disabled={loading}>
				{loading && <LoaderIcon className="animate-spin" />} Add to Canvas
			</Button>
			<input
				type="file"
				id="uploadImg"
				ref={upFileRef}
				onChange={(e) => onImageUpload(e)}
				className="hidden"
			/>
		</div>
	);
};

export default ImageUpload;
