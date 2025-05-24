import AddImageSettings from "@/containers/AddImageSettings";
import BackgroundSettings from "@/containers/BackgroundSettings";
import ElementSettings from "@/containers/ElementSettings";
import FillColor from "@/containers/FillColor";
import {
	Atom,
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
	Star,
	Trash,
	Triangle,
	Type,
	WalletCardsIcon,
	WandSparkles,
} from "lucide-react";

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
		name: "Star",
		icon: Star,
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
	},
	{
		name: "line",
		icon: Minus,
	},
	{
		name: "radius",
		icon: SquareRoundCorner,
	},
	{
		name: "delete",
		icon: Trash,
	},
];