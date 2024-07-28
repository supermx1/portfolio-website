import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            colors: {
                'primary': {
                    '50': '#f8ffe6',
                    '100': '#f0fec9',
                    '200': '#dffd99',
                    '300': '#bff844',
                    '400': '#afef2c',
                    '500': '#90d50d',
                    '600': '#6eaa06',
                    '700': '#54810a',
                    '800': '#43660e',
                    '900': '#395611',
                    '950': '#1c3003',
                },
            },
            animation: {
                marquee: "marquee var(--duration) linear infinite",
                "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
            },
            keyframes: {
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                "marquee-vertical": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-100% - var(--gap)))" },
                },
            },
        },
        fontFamily: {
            // sans: ["Inter Tight", "sans-serif"],
            sans: ["Plus Jakarta Sans", "sans-serif"],
        }
    },

    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
    darkMode: "class"
} as Config;