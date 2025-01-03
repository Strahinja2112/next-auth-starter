import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import type { Adapter } from "next-auth/adapters";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/env.mjs";
import prisma from "@/lib/prisma";
// import { stripeServer } from '@/lib/stripe';

export const { auth, handlers, signIn, signOut } = NextAuth({
	adapter: PrismaAdapter(prisma) as Adapter,
	providers: [
		GitHubProvider({
			clientId: env.GITHUB_ID,
			clientSecret: env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: env.GOOGLE_ID,
			clientSecret: env.GOOGLE_SECRET,
		}),
	],
	callbacks: {
		async session({ session, user }) {
			if (!session.user) return session;

			session.user.id = user.id;
			// session.user.stripeCustomerId = user.stripeCustomerId;
			session.user.isActive = user.isActive;

			return session;
		},
	},
	events: {
		createUser: async ({ user }) => {
			if (!user.email || !user.name) return;

			// await prisma.tests.create({
			// 	data: {
			// 		text: `email: ${user.email}, name: ${user.name}, id: ${user.id}`,
			// 	},
			// });
		},
	},
	secret: env.AUTH_SECRET,
});
