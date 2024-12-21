import { HeroForm } from "@/components/form";
import { Icons } from "@/components/icons";
import Header from "@/components/navbar/header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import prisma from "@/lib/prisma";
import * as m from "@/paraglide/messages";
import { auth } from "./api/auth/[...nextauth]/auth-options";

export default async function Page() {
	const result = await prisma.user.findFirst();

	const session = await auth();

	return (
		<>
			<Header />
			<section className="container mt-10 flex flex-col items-center gap-3 space-y-5 text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
				<h1 className="mb-1 text-5xl font-semibold leading-tight tracking-tighter md:text-6xl">
					{m.nextjsStarterTemplateHeadline()}
				</h1>
				<p className="text-muted-foreground max-w-2xl text-lg">
					{m.nextjsStarterTemplateDescription()}
				</p>
				<div className="mt-1">
					<HeroForm />
				</div>
				<div className="mt-2 flex gap-4">
					<Button asChild>
						<a
							href={`${siteConfig.links.github}/blob/master/README.md#getting-started`}
							target="_blank"
						>
							{m.getStarted()}
						</a>
					</Button>
					<Button variant="outline" asChild>
						<a href={siteConfig.links.github} target="_blank">
							<Icons.github className="mr-2 size-4" /> {m.github()}
						</a>
					</Button>
				</div>
			</section>
		</>
	);
}
