import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { FabricImage } from "fabric";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const SearchImages = () => {
	const url = "https://api.unsplash.com/search/photos";

	const [imgs, setImgs] = useState([]);
	const [imgInput, setImgInput] = useState("");
	const { canvasEditor } = useCanvasEditorStore();

	const getImageListAPI = async (query: string) => {
		const res = await fetch(
			`${url}?page=1&query=${query}&per_page=20&&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
		);
		const data = await res.json();
		console.log("data", data.results);
		setImgs(data.results);
		return data.results;
	};

	const addImgToCanvas = async (imgUrl: string) => {
		console.log("imgUrl", imgUrl);
		const canvasImg = await FabricImage.fromURL(imgUrl);
		canvasEditor?.add(canvasImg);
		canvasEditor?.renderAll();
	};

	useEffect(() => {
		getImageListAPI("cat");
	}, []);

	return (
		<div className="mt-4">
			<div>
				<h2 className="font-bold">Search Images</h2>
				<div className="mt-2 flex items-center gap-2">
					<Input
						placeholder="seach images"
						value={imgInput}
						onInput={(e: any) => setImgInput(e.target.value)}
					/>
					<Button onClick={() => getImageListAPI(imgInput)}>
						<SearchIcon />
					</Button>
				</div>
			</div>
			<div className="mt-4 grid grid-cols-2 gap-4 h-[70vh] overflow-y-auto py-2">
				{imgs.map((img: any) => (
					<div key={img.id} onClick={() => addImgToCanvas(img.urls.small)}>
						<Image
							src={img.urls.thumb}
							alt={img.alt_description}
							width={300}
							height={300}
							className="rounded-md w-full h-[80px] object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchImages;
