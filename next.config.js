const { paraglide } = require("@inlang/paraglide-next/plugin");
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
};

module.exports = paraglide({
	paraglide: {
		project: "./project.inlang",
		outdir: "./src/paraglide",
	},
	...nextConfig,
});
