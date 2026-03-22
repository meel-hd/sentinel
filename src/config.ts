import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	brandConfig as BrandConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Marrakesh Sentinel",
	subtitle: "Ideas that matter.",
	lang: "en",
	themeColor: {
		hue: 285,
		fixed: false,
	},
	banner: {
		enable: true,
		src: "https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 3,
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/meel-hd/sentinel",
			external: true,
		},
	],
};

export const brandConfig: BrandConfig = {
	avatar: "assets/images/logo.jpg",
	name: siteConfig.title,
	bio: siteConfig.subtitle,
	links: [],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
