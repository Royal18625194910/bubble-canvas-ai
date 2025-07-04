import PreTemplates from "../_components/PreTemplates";

const TemplatePage = () => {
	return (
		<div className="w-full pt-4 px-6">
			<div className="w-full relative h-[300px] bg-blue-400 rounded-2xl">
				<span className="absolute text-white text-2xl bottom-3 left-4">
					WorkSpace
				</span>
			</div>
			{/* 最近设计 */}
			<PreTemplates />
		</div>
	);
};

export default TemplatePage;
