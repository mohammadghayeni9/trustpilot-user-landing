// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	ssr: true,
	nitro: {
		// routeRules: {
		// 	"/articles/**": { cache: { swr: true, maxAge: 60 * 60 } },
		// 	"/robots/**": { cache: { swr: true, maxAge: 60 * 60 } },
		// 	"/datasets/**": { cache: { swr: true, maxAge: 60 * 60 } },
		// 	"/articles": { cache: { swr: true, maxAge: 60 * 60 } },
		// 	"/robots": { cache: { swr: true, maxAge: 60 * 60 } },
		// 	"/datasets": { cache: { swr: true, maxAge: 60 * 60 } },
		// 	"/": { cache: { swr: true, maxAge: 60 * 60 } },
		// 	"/subscription": { cache: { swr: true, maxAge: 60 * 60 } },
		// },
		prerender: {
			crawlLinks: true,
			routes: ['/']
		},
	},
	modules: [
		"nuxt-svgo",
		"@nuxtjs/tailwindcss",
		"shadcn-nuxt",
		"@nuxtjs/color-mode",
	],
	router: {
		options: {
			scrollBehaviorType: "smooth",
		},
	},
	shadcn: {
		componentDir: "components/ui",
	},

	css: [
		"~/assets/styles/main.css",
		"~/assets/css/tailwind.css",
		"~/assets/css/dracula.css",
	],
});
