import { ImageUpIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const ImageUpload = () => {
	const [img, setImg] = useState("");
	const upFileRef = useRef<any>();
	const onImageUpload = (e: any) => {
		const file = e.target.files[0];
		const imgUrl = URL.createObjectURL(file);
		console.log(file, imgUrl);
		setImg(imgUrl);
	};

	const chooseImg = () => {
		upFileRef.current.click();
	};

	return (
		<div>
			{img ? (
				<Image
					onClick={chooseImg}
					src={img}
					alt="uploaded image"
					width={300}
					height={200}
					className="h-[150px] w-full rounded-lg"
					objectFit="cover"
				/>
			) : (
				<label
					onClick={chooseImg}
					htmlFor="uploadImg"
					className="cursor-pointer bg-gray-100 h-[100px]  p-4 rounded-lg flex flex-col items-center justify-center mb-4">
					<ImageUpIcon size={26} />
					<h2>Upload Image</h2>
				</label>
			)}
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
