"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useTransition } from "react";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as m from "@/paraglide/messages";

export const UserDropdown = ({ session: { user } }: { session: Session }) => {
	const [isPending, startTransition] = useTransition();

	async function handleCreateCheckoutSession() {
		// setIsPending(true);
		// const res = await fetch("/api/stripe/checkout-session");
		// const checkoutSession = await res.json().then(({ session }) => session);
		// const stripe = await loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
		// await stripe!.redirectToCheckout({
		//   sessionId: checkoutSession.id,
		// });
	}

	function startSignOut() {
		startTransition(async () => {
			await signOut();
		});
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Image
					className="overflow-hidden rounded-full"
					src={`${user?.image}`}
					alt={`${user?.name}`}
					width={32}
					height={32}
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>{m.myAccount()}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<div className="flex flex-col items-center justify-center p-2">
					<Image
						className="overflow-hidden rounded-full"
						src={`${user?.image}`}
						alt={`${user?.name}`}
						width={100}
						height={100}
					/>
					<h2 className="py-2 text-lg font-bold">{user?.name}</h2>
					<Button
						onClick={handleCreateCheckoutSession}
						disabled={user?.isActive || isPending}
						className="w-64"
					>
						{user?.isActive ? (
							m.youAreAPro()
						) : (
							<>
								{isPending && (
									<Icons.loader className="mr-2 size-4 animate-spin" />
								)}
								{m.upgradeToProCta()}
							</>
						)}
					</Button>
				</div>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={startSignOut}>
					<Icons.logOut className="mr-2 size-4" />{" "}
					<span className="flex w-full items-center justify-between">
						{m.logOut()}
						{isPending && <Icons.loader className="mr-2 size-4 animate-spin" />}
					</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
