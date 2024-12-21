import { JetBrains_Mono, Lexend, Outfit } from "next/font/google";

const font = Lexend({
	subsets: ["latin"],
	variable: "--font-sans",
	fallback: ["system-ui", "arial"],
});

const fontMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
	fallback: ["system-ui", "arial"],
});

export const fonts = [font.variable, fontMono.variable];
