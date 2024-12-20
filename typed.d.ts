import { DefaultUser } from "next-auth";

import { TUser } from "@/types/user";

declare module "next-auth" {
	interface Session {
		user?: TUser & {
			id: string;
			stripeCustomerId?: string;
			isActive: boolean;
		};
	}
	interface User extends TUser {
		stripeCustomerId?: string;
		isActive: boolean;
	}
}
