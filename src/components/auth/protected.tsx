import { auth } from "@/app/api/auth/[...nextauth]/auth-options";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function Protected({ children }: PropsWithChildren) {
	const session = await auth();

	if (!session) {
		redirect("/auth");
	}

	return children;
}
