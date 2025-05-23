import { ChromePicker, CirclePicker } from "react-color";

type ColorPickerEditorProps = {
	value: string;
	onColorChange: (color: string) => void;
};

const ColorPickerEditor = ({
	value,
	onColorChange,
}: ColorPickerEditorProps) => {
	return (
		<div className="space-y-2">
			<ChromePicker
				color={value}
				onChange={(color) => onColorChange(color.hex)}
			/>
			<CirclePicker
				color={value}
				onChange={(color) => onColorChange(color.hex)}
			/>
		</div>
	);
};

export default ColorPickerEditor;
