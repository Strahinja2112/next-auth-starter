import Protected from "@/components/auth/protected";
import { Footer } from "@/components/footer";
import Header from "@/components/navbar/header";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
	return (
		<Protected>
			<Header />
			<main className="mx-auto flex h-full max-w-7xl flex-1 items-center justify-center">
				{children}
			</main>
			<ThemeSwitcher className="absolute bottom-5 right-5 z-10" />
			<Footer />
		</Protected>
	);
}
