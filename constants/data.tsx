import AddImageSettings from "@/containers/AddImageSettings";
import AITransformSettings from "@/containers/AITransformSettings";
import BackgroundSettings from "@/containers/BackgroundSettings";
import BorderColor from "@/containers/BorderColor";
import BorderWidth from "@/containers/BorderWidth";
import ElementSettings from "@/containers/ElementSettings";
import FillColor from "@/containers/FillColor";
import FontFamily from "@/containers/FontFamily";
import Opacity from "@/containers/Opacity";
import Radius from "@/containers/Radius";
import TextSettings from "@/containers/TextSettings";
import {
	ArrowDown,
	ArrowUp,
	Atom,
	Blend,
	BookType,
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
		component: <TextSettings />,
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

export type AITransformTool = {
	name: string;
	command: string;
	image: any;
	input?: boolean;
};

export const AITransformTools: AITransformTool[] = [
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
		name: "Generative fill",
		command: "bg-genfill,w-1000,h-960,cm-pad_resize",
		image: images.genfill,
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
		name: "Smart crop",
		command: "fo-auto",
		image: images.smartcrop,
	},
	{
		name: "Contrast",
		command: "e-contrast",
		image: images.contrast,
	},
	{
		name: "Grayscale",
		command: "e-grayscale",
		image: images.grayscale,
	},
	{
		name: "Blur",
		command: "bl-10",
		image: images.blur,
	},
	{
		name: "Flip",
		command: "e-flip",
		image: images.flip,
	},
];

export const TextSettingsList = [
	{
		name: "Fill",
		icon: Palette,
		component: <FillColor />,
	},
	{
		name: "Stroke Color",
		icon: Square,
		component: <BorderColor />,
	},
	{
		name: "Stroke Width",
		icon: Minus,
		component: <BorderWidth />,
	},
	{
		name: "Opacity",
		icon: Blend,
		component: <Opacity />,
	},
	{
		name: "Font",
		icon: BookType,
		component: <FontFamily />,
	},
	{
		name: "Bring Front",
		icon: ArrowUp,
	},
	{
		name: "Move Back",
		icon: ArrowDown,
	},
];

export const FontFamilyList = [
	"Arial",
	"Arial Black",
	"Verdana",
	"Helvetica",
	"Tahoma",
	"Trebuchet MS",
	"Times New Roman",
	"Georgia",
	"Garamond",
	"Courier New",
	"Brush Script MT",
	"Palatino",
	"Bookman",
	"Comic Sans MS",
	"Impact",
	"Lucida Sans Unicode",
	"Geneva",
	"Lucida Console",
];

export const StickerList = [
	"https://cdn-icons-png.flaticon.com/256/428/428094.png",
	"https://cdn-icons-png.flaticon.com/256/2111/2111463.png",
	"https://cdn-icons-png.flaticon.com/256/5968/5968764.png",
	"https://cdn-icons-png.flaticon.com/256/1384/1384060.png",
	"https://cdn-icons-png.flaticon.com/256/733/733585.png",
	"https://cdn-icons-png.flaticon.com/256/2111/2111646.png",
	"https://cdn-icons-png.flaticon.com/256/4494/4494477.png",
	"https://cdn-icons-png.flaticon.com/256/281/281764.png",
	"https://cdn-icons-png.flaticon.com/256/1409/1409941.png",
	"https://cdn-icons-png.flaticon.com/256/10851/10851235.png",
	"https://cdn-icons-png.flaticon.com/256/520/520460.png",
	"https://cdn-icons-png.flaticon.com/256/1791/1791311.png",
	"https://cdn-icons-png.flaticon.com/256/1791/1791320.png",
	"https://cdn-icons-png.flaticon.com/256/1791/1791292.png",
	"https://cdn-icons-png.flaticon.com/256/1791/1791355.png",
	"https://cdn-icons-png.flaticon.com/256/1791/1791307.png",
	"https://cdn-icons-png.flaticon.com/256/7996/7996409.png",
	"https://cdn-icons-png.flaticon.com/256/8760/8760748.png",
	"https://cdn-icons-png.flaticon.com/256/5171/5171530.png",
	"https://cdn-icons-png.flaticon.com/256/5175/5175169.png",
	"https://cdn-icons-png.flaticon.com/256/7096/7096435.png",
	"https://cdn-icons-png.flaticon.com/256/346/346167.png",
	"https://cdn-icons-png.flaticon.com/256/1776/1776968.png",
	"https://cdn-icons-png.flaticon.com/256/1497/1497177.png",
	"https://cdn-icons-png.flaticon.com/256/2517/2517029.png",
	"https://cdn-icons-png.flaticon.com/256/2276/2276906.png",
	"https://cdn-icons-png.flaticon.com/256/6604/6604292.png",
	"https://cdn-icons-png.flaticon.com/256/6010/6010131.png",
	"https://cdn-icons-png.flaticon.com/256/11167/11167978.png",
	"https://cdn-icons-png.flaticon.com/256/11145/11145432.png",
	"https://cdn-icons-png.flaticon.com/256/7645/7645528.png",
	"https://cdn-icons-png.flaticon.com/256/16116/16116383.png",
	"https://cdn-icons-png.flaticon.com/256/639/639373.png",
];