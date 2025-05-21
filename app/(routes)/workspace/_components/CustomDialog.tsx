import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useUserStore } from "@/store/useUser.Store";
import { useMutation } from "convex/react";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const CustomDialog = ({ children }: { children: React.ReactNode }) => {
	const { user } = useUserStore();
	const [open, setOpen] = useState(false);
	const CreateNewDesignAPI = useMutation(api.designs.CreateNewDesign);
	const [loading, setLoading] = useState(false);

	const [form, setForm] = useState({
		name: "",
		width: 0,
		height: 0,
	});
	const handleCreate = async () => {
		// #TODO: 添加后端接口
		console.log("create", form, user._id);
		setLoading(true);
		try {
			const res = await CreateNewDesignAPI({
				...form,
				uid: user._id,
			});
			console.log("res", res);
		} catch (error) {
			console.log("error", error);
		}
		setLoading(false);
		setOpen(false);
	};
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Creae Custom Canvas</AlertDialogTitle>
					<AlertDialogDescription>
						Provide Canvas With and Height
					</AlertDialogDescription>
					{/* 内容 */}
					<div className="text-gray-500">
						<div>Design Name</div>
						<Input
							type="text"
							value={form.name}
							placeholder="Design Name"
							onChange={(e: any) => setForm({ ...form, name: e.target.value })}
						/>
						<div className="flex justify-between w-full gap-4 mt-3">
							<div className="w-full">
								<div>With</div>
								<Input
									value={form.width}
									type="number"
									placeholder="With"
									onChange={(e: any) =>
										setForm({ ...form, width: Number(e.target.value) })
									}
								/>
							</div>
							<div className="w-full">
								<div>Height</div>
								<Input
									value={form.height}
									type="number"
									placeholder="Height"
									onChange={(e: any) =>
										setForm({ ...form, height: Number(e.target.value) })
									}
								/>
							</div>
						</div>
					</div>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<Button
						disabled={loading || !form.name || !form.height || !form.width}
						onClick={handleCreate}
						className="w-full">
						{loading && <Loader2 className="animate-spin" />}
						Create
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default CustomDialog;
