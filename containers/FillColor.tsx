import ColorPickerEditor from "./ColorPickerEditor";

const FillColor = () => {
	return (
		<div>
			<ColorPickerEditor
				value="#ffffff"
				onColorChange={(color) => console.log(color)}
			/>
		</div>
	);
};

export default FillColor;
