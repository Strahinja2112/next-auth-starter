import { auth } from "@/app/api/auth/[...nextauth]/auth-options";
import { LanguageSwitcher } from "./language-switcher";

import { UserDropdown } from "@/components/navbar/user-dropdown";
import { content, Link } from "@/lib/i18n";

import NextLink from "next/link";
import { buttonVariants } from "../ui/button";

export default async function Header() {
	const session = await auth();

	return (
		<header className="w-full border-b backdrop-blur-[1px]">
			<div className="container flex h-16 items-center justify-between">
				<Link href="/" className="font-mono text-lg font-bold">
					{content.appName()}
				</Link>
				<div className="flex items-center gap-2">
					{session ? (
						<UserDropdown session={session} />
					) : (
						<NextLink
							href="/auth"
							className={buttonVariants({
								variant: "secondary",
							})}
						>
							Sign In
						</NextLink>
					)}
					<LanguageSwitcher />
				</div>
			</div>
		</header>
	);
}
