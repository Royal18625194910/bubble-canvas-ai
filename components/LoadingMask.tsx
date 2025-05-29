import { Dialog, DialogOverlay } from "@/components/ui/dialog";
import { Loader } from "lucide-react";

export type LoadingMaskProps = {
	open: boolean;
	onClose?: () => void;
};

const LoadingMask = ({ open }: LoadingMaskProps) => {
	return (
		<Dialog open={open}>
			<DialogOverlay className="flex items-center justify-center h-screen w-screen text-slate-50">
				<div className="flex justify-center items-center gap-4">
					<Loader className="animate-spin" size={30} />
					Loading...
				</div>
			</DialogOverlay>
		</Dialog>
	);
};

export default LoadingMask;
