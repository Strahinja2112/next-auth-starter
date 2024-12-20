import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

export default function RedirectLoggedIn({ children }: PropsWithChildren) {
	const router = useRouter();
	const { status } = useSession();

	if (status === "loading") {
		return null;
	}

	if (status === "authenticated") {
		router.replace("/");

		return;
	}

	return children;
}
