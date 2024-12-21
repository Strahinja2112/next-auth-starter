"use client";

import { signIn } from "next-auth/react";
import { useTransition } from "react";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

export function SignInButton(props: {
	icon?: LucideIcon;
	provider: "github" | "google";
	text: string;
}) {
	const [isPending, startTransition] = useTransition();

	const handleSignIn = () => {
		startTransition(async () => {
			await signIn(props.provider);
		});
	};

	return (
		<Button onClick={handleSignIn} disabled={isPending} className="w-full">
			{props.icon && <props.icon className="mr-2 size-4" />}
			{props.text}
			{isPending && <Icons.loader className="mr-2 size-4 animate-spin" />}
		</Button>
	);
}
