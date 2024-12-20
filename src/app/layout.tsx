import { LanguageProvider } from "@inlang/paraglide-next";
import { PropsWithChildren } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/config";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { languageTag } from "@/paraglide/runtime.js";
import { ViewTransitions } from "next-view-transitions";

import "@/styles/globals.css";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

export function generateMetadata(): Metadata {
	return {
		metadataBase: new URL(siteConfig.url()),
		title: {
			default: siteConfig.title(),
			template: `%s | ${siteConfig.title()}`,
		},
		description: siteConfig.description(),
		keywords: siteConfig.keywords(),
		robots: { index: true, follow: true },
		icons: {
			icon: "/favicon/favicon.ico",
			shortcut: "/favicon/favicon-16x16.png",
			apple: "/favicon/apple-touch-icon.png",
		},
		verification: {
			google: siteConfig.googleSiteVerificationId(),
		},
		openGraph: {
			url: siteConfig.url(),
			title: siteConfig.title(),
			description: siteConfig.description(),
			siteName: siteConfig.title(),
			images: "/opengraph-image.png",
			type: "website",
			locale: languageTag(),
		},
		twitter: {
			card: "summary_large_image",
			title: siteConfig.title(),
			description: siteConfig.description(),
			images: "/opengraph-image.png",
		},
	};
}

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<LanguageProvider>
			<ViewTransitions>
				<html lang={languageTag()} suppressHydrationWarning>
					<body className={cn("flex min-h-screen flex-col font-sans", fonts)}>
						<SessionProvider>
							<div className="dot-grid" />
							<ThemeProvider
								attribute="class"
								defaultTheme="dark"
								disableTransitionOnChange
							>
								{children}
							</ThemeProvider>
						</SessionProvider>
					</body>
				</html>
			</ViewTransitions>
		</LanguageProvider>
	);
}
