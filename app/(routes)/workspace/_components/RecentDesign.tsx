import { Button } from "@/components/ui/button";
import CustomDialog from "./CustomDialog";

const RecentDesign = () => {
	return (
		<div className="mt-6">
			<h1 className="text-3xl font-bold">Recent Design</h1>
			<div className="flex flex-col items-center pt-8">
				<div className="w-[140px] h-[140px] rounded-full bg-gray-200 "></div>
				<p className="text-xl mt-10">
					You don't design any!!! Create one new now
				</p>
				<CustomDialog>
					<Button className="mt-6">Create New</Button>
				</CustomDialog>
			</div>
		</div>
	);
};

export default RecentDesign;
