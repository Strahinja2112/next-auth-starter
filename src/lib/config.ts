import { env } from "@/env.mjs";
import * as m from "@/paraglide/messages";

export const siteConfig = {
	title: m.metaTitle,
	description: m.metaDescription,
	links: {
		github: "https://github.com/Strahinja2112/next-auth-starter",
		portfolio: "https://strahinja.vercel.app",
	},
	keywords: () => [
		m.metaKeywordNextjs(),
		m.metaKeywordReact(),
		m.metaKeywordNextjsStarter(),
		m.metaKeywordNextjsBoilerplate(),
		m.metaKeywordStarterTemplate(),
		m.metaKeywordTailwindcss(),
		m.metaKeywordTypescript(),
		m.metaKeywordShadcnUi(),
		m.metaKeywordNextAuth(),
		m.metaKeywordPrisma(),
	],
	url: () => env.APP_URL,
	googleSiteVerificationId: () => env.GOOGLE_SITE_VERIFICATION_ID || "",
};
