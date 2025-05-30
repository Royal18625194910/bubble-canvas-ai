import { Button } from "@/components/ui/button";
import images from "@/constants/images";
import { api } from "@/convex/_generated/api";
import { toast } from "@/hooks/use-toast";
import { useCanvasEditorStore } from "@/store/useCanvasEditor.Store";
import { UserButton } from "@stackframe/stack";
import { useMutation } from "convex/react";
import { Download, SaveIcon } from "lucide-react";
import Image from "next/image";

type DesignHeaderProps = {
	designInfo: any;
};

const DesignHeader = (props: DesignHeaderProps) => {
	const SaveDesign = useMutation(api.designs.SaveDesign);
	const { canvasEditor } = useCanvasEditorStore();
	const onSave = async () => {
		const jsonData = canvasEditor?.toJSON();
		const res = await SaveDesign({
			id: props.designInfo._id,
			jsonTemplate: jsonData,
		});
		console.log("onSave", res, jsonData, props.designInfo._id);
		toast({
			title: "Design saved",
			description: "Your design has been saved successfully",
		});
	};

	const onDownload = () => {
		const imgData = canvasEditor?.toDataURL({
			format: "png",
			quality: 1,
			multiplier: 1,
		});
		console.log("imgData", imgData);
		const link = document.createElement("a");
		link.download = `bubble-canvas-${Date.now()}.png`;
		link.href = imgData as string;
		link.click();
	};

	return (
		<div className="flex items-center justify-between p-3 bg-gradient-to-r from-sky-500 via-blue-400 to-purple-500">
			<Image src={images.logo} alt="logo" width={100} height={50} />
			<input
				placeholder="Design Name"
				className="text-white border-none outline-none bg-transparent placeholder:text-white"
				value={props.designInfo?.name}
			/>
			<div className="flex items-center gap-4">
				<Button onClick={onSave}>
					<SaveIcon />
					Save
				</Button>
				<Button onClick={onDownload}>
					<Download />
					Download
				</Button>
				<UserButton />
			</div>
		</div>
	);
};

export default DesignHeader;
