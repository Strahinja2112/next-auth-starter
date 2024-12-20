import { type NextRequest } from "next/server";

import { middleware as paraglide } from "@/lib/i18n";

export async function middleware(request: NextRequest) {
	return paraglide(request);
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
