type SideBarSettingsProps = {
	selectOption: any;
};
const SideBarSettings = (props: SideBarSettingsProps) => {
	console.log(props.selectOption.component);
	return (
		<div className="w-[300px] border-r shadow-r pt-6 flex flex-col gap-2 items-start px-3">
			<div>{props.selectOption.name}</div>
			<div>{props.selectOption.description}</div>
			<div className="w-full">{props.selectOption?.component}</div>
		</div>
	);
};

export default SideBarSettings;
