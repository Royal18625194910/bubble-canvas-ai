import AddImageSettings from "@/containers/AddImageSettings";
import AITransformSettings from "@/containers/AITransformSettings";
import BackgroundSettings from "@/containers/BackgroundSettings";
import BorderColor from "@/containers/BorderColor";
import BorderWidth from "@/containers/BorderWidth";
import ElementSettings from "@/containers/ElementSettings";
import FillColor from "@/containers/FillColor";
import Opacity from "@/containers/Opacity";
import Radius from "@/containers/Radius";
import {
	Atom,
	Blend,
	Circle,
	ComponentIcon,
	Folder,
	Home,
	Image,
	LayoutDashboardIcon,
	LayoutPanelTop,
	Minus,
	Palette,
	RectangleVertical,
	Settings,
	Square,
	SquareRoundCorner,
	Triangle,
	Type,
	WalletCardsIcon,
	WandSparkles,
} from "lucide-react";
import images from "./images";

export const WorkSpaceMenus = [
	{
		name: "Home",
		icon: Home,
		path: "/workspace",
	},
	{
		name: "Projects",
		icon: Folder,
		path: "/workspace/projects",
	},
	{
		name: "Templates",
		icon: LayoutDashboardIcon,
		path: "/workspace/templates",
	},
	{
		name: "Billing",
		icon: WalletCardsIcon,
		path: "/workspace/billing",
	},
];

export const WorkSpaceProducts = [
	{
		name: "Youtube",
	},
	{
		name: "TikTok",
	},
	{
		name: "Instagram",
	},
	{
		name: "Facebook",
	},
	{
		name: "Twitter",
	},
	{
		name: "LinkedIn",
	},
	{
		name: "Reddit",
	},
	{
		name: "Twitch",
	},
	{
		name: "YouTube",
	},
	{
		name: "TikTok",
	},
];

export const SideBarMenus = [
	{
		name: "Templates",
		icon: LayoutPanelTop,
		description: "Select a template to start designing",
	},
	{
		name: "Elements",
		icon: ComponentIcon,
		description: "Select a Elements to start designing",
		component: <ElementSettings />,
	},
	{
		name: "Images",
		icon: Image,
		description: "Select a Images to start designing",
		component: <AddImageSettings />,
	},
	{
		name: "Text",
		icon: Type,
		description: "Select a Text to start designing",
	},
	{
		name: "AI",
		icon: WandSparkles,
		description: "use  AI to start designing",
		component: <AITransformSettings />,
	},
	{
		name: "Background",
		icon: Atom,
		description: "Select a Background to start designing",
		component: <BackgroundSettings />,
	},
	{
		name: "Settings",
		icon: Settings,
		description: "This is Settings",
	},
];

export const Shapes = [
	{
		name: "Rectangle",
		icon: RectangleVertical,
	},
	{
		name: "Circle",
		icon: Circle,
	},
	{
		name: "Triangle",
		icon: Triangle,
	},
	{
		name: "Line",
		icon: Minus,
	},
];

export const shapeTools = [
	{
		name: "fill",
		icon: Palette,
		component: <FillColor />,
	},
	{
		name: "rect",
		icon: Square,
		component: <BorderColor />,
	},
	{
		name: "line",
		icon: Minus,
		component: <BorderWidth />,
	},
	{
		name: "opacity",
		icon: Blend,
		component: <Opacity />,
	},
	{
		name: "radius",
		icon: SquareRoundCorner,
		component: <Radius />,
	},
	// {
	// 	name: "delete",
	// 	icon: Trash,
	// },
];

export const AITransformTools = [
	{
		name: "Background Remove",
		command: "e-bgremove",
		image: images.rmbg,
	},
	{
		name: "Change Background",
		command: "e-changebg-prompt-snow",
		image: images.changebg,
		input: true,
	},
	{
		name: "Generate fill",
		command: "bg-genfill,w-1000,h-960,cm-pad_resize",
		image: images.genfill,
		input: true,
	},
	{
		name: "AI drop shadow",
		command: "e-dropshadow",
		image: images.shadow,
	},
	{
		name: "Upscale",
		command: "e-upscale",
		image: images.upscale,
	},
	{
		name: "Smart Crop",
		command: "fo-auto",
		image: images.smartAuto,
	},
];