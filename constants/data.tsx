import AddImageSettings from "@/containers/AddImageSettings";
import BackgroundSettings from "@/containers/BackgroundSettings";
import {
	Atom,
	ComponentIcon,
	Folder,
	Home,
	Image,
	LayoutDashboardIcon,
	LayoutPanelTop,
	Settings,
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
