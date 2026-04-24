// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    devtools: {
        enabled: process.env.NUXT_SITE_ENV === "development",
        timeline: {
            enabled: true,
        },
    },
    ssr: true,
    site: {
        url: process.env.NUXT_SITE_URL || 'https://stadssafaritheater.nl',
        name: "Stadssafari",
        description: "Van de makers van de bekroonde succesfilms De Nieuwe Wildernis en De Wilde Noordzee. Bioloog Luc Hoogenstein neemt u mee op een safari door uw eigen stad. Doormiddel van spectaculaire natuurfilmbeelden, geluiden en fotografie ontdekt u een wereld die er altijd al was: onder uw voeten, boven uw hoofd en in uw achtertuin.",
        defaultLocale: "nl",
    },
    image: {
        //     provider: "static",
    },
    app: {
        head: {
            charset: "utf-8",
            htmlAttrs: {lang: 'nl'},
            viewport: "width=device-width, initial-scale=1",
            templateParams: {
                separator: '|'
                // other common separators: '·', '—', '•'
            },
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "96x96",
                    href: "/favicon/favicon-96x96.png",
                },
                {
                    rel: "icon",
                    type: "image/svg+xml",
                    href: "/favicon/favicon.svg",
                },
                {
                    rel: "shortcut icon",
                    href: "/favicon.ico",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/favicon/apple-touch-icon.png",
                },
                {
                    rel: "manifest",
                    href: "/favicon/site.webmanifest",
                },
            ],
            meta: [
                {
                    name: "theme-color",
                    content: "#E8F2EE",
                },
                {
                    name: "msapplication-TileColor",
                    content: "#E8F2EE",
                },
            ],
        },
    },
    css: ["@/assets/css/main.css", "vue-final-modal/style.css"],
    googleFonts: {
        // download: true,
        // outputDir: this.options.dir.assets + "/fonts",
        families: {
            // "Barlow": [400, 700, 800],
            "Barlow+Condensed": {
                wght: [300, 400, 600, 700, 800],
            },
            "Plus+Jakarta+Sans": {
                wght: [300, 400, 500, 600, 700, 800],
                // ital: [400, 900],
            },
            "PT+Serif": {
                wght: [800]
            }
        },
        display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional',
    },
    modules: [
        // "@nuxt/image""
        "@nuxt/icon",
        "@nuxtjs/google-fonts",
        "@vueuse/nuxt",
        "nuxt-svgo",
        // "@dargmuesli/nuxt-cookie-control",
        "@pinia/nuxt",
        "@nuxt/image",
        "@nuxtjs/seo"],
    vite: {
        plugins: [
            tailwindcss() as any,
        ],
        // Sourcemaps are optional in production; disabling avoids noisy warnings from some plugins.
        build: {
            sourcemap: false,
        },
        css: {
            // Prevent CSS sourcemaps during dev/build unless you explicitly need them.
            devSourcemap: false,
        },
    },
    runtimeConfig: {
        // Keys within public, will be also exposed to the client-side
        public: {
            siteUrl: "https://stadssafaritheater.nl",
            siteTitle: "Stadssafari",
            googleTagManagerId: "GTM-KBHVTJR3",
            movieTitle: "Stadssafari",
            mooveeApiKey: process.env.NUXT_PUBLIC_MOOVEE_API_KEY ?? 'MV-XXX',
            cookiebotId: "4fc87e11-859f-4648-883e-1b8539791265",
            // cookiescriptId: "",
        },
    },
    svgo: {
        defaultImport: "component",
        autoImportPath: "./assets/images/svg/",
    },
    nitro: {
        preset: 'static'
    },
    compatibilityDate: "2026-01-06",
});
