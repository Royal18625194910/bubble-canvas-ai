import { WorkSpaceProducts } from "@/constants/data";

const IntroOptions = () => {
	return (
		<div className="pt-4 px-6">
			<div className="w-full relative h-[300px] bg-blue-400 rounded-2xl">
				<span className="absolute text-white text-2xl bottom-3 left-4">
					WorkSpace
				</span>
			</div>
			{/* 产品模板 */}
			<div className="w-full pt-3 h-[100px] flex  items-center justify-between px-14">
				{WorkSpaceProducts.map((item, index) => (
					<div
						key={index}
						className="mt-4 flex flex-col items-center justify-center gap-1">
						<div className="w-[50px] h-[50px] rounded-full bg-purple-400" />
						<span>{item.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default IntroOptions;
