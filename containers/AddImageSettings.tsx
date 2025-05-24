import SearchImages from "./SearchImages";
import UploadImage from "./UploadImage";

const AddImageSettings = () => {
	return (
		<div className="w-full">
			<UploadImage />
			<SearchImages />
		</div>
	);
};

export default AddImageSettings;
