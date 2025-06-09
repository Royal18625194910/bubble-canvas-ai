"use client";
import { api } from "@/convex/_generated/api";
import { getStorage } from "@/utils";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PreTemplates = () => {
	const router = useRouter();

	const templates = useQuery(api.templates.getAllTemplates);
	const createDesignFromTemplate = useMutation(
		api.designs.CreateDesignFromTemplate
	);
	console.log("templates", templates);

	const onTemplateSelect = async (template: any) => {
		// router.push(`/design/${templateId}`);
		const res = await createDesignFromTemplate({
			name: template.name,
			imagePreview: template.imagePreview,
			jsonTemplate: template.jsonData,
			uid: getStorage("user")._id,
			width: template.width,
			height: template.height,
		});
		console.log("templateId", template);
		router.push(`/design/${res}`);
	};

	return (
		<div className="mt-6">
			<h1 className="text-3xl font-bold">Pre Templates</h1>
			<div className="grid lg:grid-cols-5 lg:gap-4 mt-4">
				{templates?.map((template) => (
					<div
						key={template._id}
						onClick={() => onTemplateSelect(template)}
						className="bg-gray-50 rounded-lg">
						<Image
							src={template.imagePreview}
							alt={template.name}
							width={500}
							height={500}
							className="w-full h-[300px] object-cover rounded-xl"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default PreTemplates;
