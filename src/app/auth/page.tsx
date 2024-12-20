"use client";

import RedirectLoggedIn from "@/components/auth/redirect-logged-in";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft, Github, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useTransition } from "react";

export default function AuthPage() {
	const [isPending, setTransition] = useTransition();

	function handleLogin(value: "google" | "github") {
		setTransition(async () => {
			await signIn(value);
		});
	}

	return (
		<RedirectLoggedIn>
			<div className="relative flex h-screen">
				<Link
					href="/"
					className={buttonVariants({
						variant: "link",
						className:
							"absolute left-4 top-4 flex items-center justify-center gap-2",
					})}
				>
					<ArrowLeft className="size-4" />
					<span>Go Back</span>
				</Link>
				<div className="flex w-full items-center justify-center bg-gradient-to-r  p-8 lg:w-1/2">
					<div className="w-full max-w-md space-y-8">
						<div className="relative z-10 space-y-6 text-white">
							<div className="flex justify-center">
								<Image src="/logo.png" alt="Logo" width={64} height={64} />
							</div>
							<h2 className="mt-6 text-center font-sans text-6xl text-white">
								Welcome back
							</h2>
							<p className="mt-2 text-center text-sm text-gray-300">
								Sign in to your account to continue
							</p>
							<div className="mt-8 space-y-6">
								<Button
									className="w-full bg-blue-600 text-white hover:bg-blue-700"
									variant="outline"
									onClick={() => handleLogin("google")}
									disabled={isPending}
								>
									<Mail className="mr-2 size-4" />
									Sign in with Google
								</Button>
								<Button
									className="w-full bg-gray-700 text-white hover:bg-gray-600"
									variant="outline"
									onClick={() => handleLogin("github")}
									disabled={isPending}
								>
									<Github className="mr-2 size-4" />
									Sign in with GitHub
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden w-1/2 items-center justify-center bg-gray-800 lg:flex">
					<Image
						src="/auth.jpg"
						alt="Authentication illustration"
						width={1400}
						height={1400}
						className="h-full object-cover"
					/>
				</div>
			</div>
		</RedirectLoggedIn>
	);
}
