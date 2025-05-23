import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { FabricImage } from "fabric";
import ImageKit from "imagekit";
import { Loader2Icon } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const UploadImage = () => {
	const [loading, setLoading] = useState(false);
	const { canvasEditor } = useCanvasEditorStore();
	const { designId } = useParams();
	const imagekit = new ImageKit({
		publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
		privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY!,
		urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
	});

	const onUploadImage = async (file: File) => {
		if (loading) return;
		console.log("file", file);
		setLoading(true);
		const img = await imagekit.upload({
			file: file as any,
			fileName: designId + ".png",
		});
		const canvasImg = await FabricImage.fromURL(img.url);
		canvasEditor?.add(canvasImg);
		canvasEditor?.renderAll();
		setLoading(false);
		console.log("img", img, designId);
	};

	return (
		<div className="w-full">
			<label htmlFor="uploadImg">
				<h1 className="py-2 rounded w-[95%] bg-purple-600 text-white flex justify-center items-center">
					{loading ? (
						<Loader2Icon className="animate-spin h-5 w-5" />
					) : (
						"Upload Image"
					)}
				</h1>
			</label>
			<input
				onChange={(e) => onUploadImage(e.target.files![0])}
				type="file"
				id="uploadImg"
				className="hidden"
			/>
		</div>
	);
};

export default UploadImage;
