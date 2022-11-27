/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,json,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            sans: 'JetBrains Mono, Arial'
        },
        colors: {
            accent: '#FDA92C',
            bg: {
                primary: '#161C24',
                secondary: '#212b36'
            },
            text: {
                primary: '#FFFFFF',
                secondary: '#909EAB'
            },
            border: '#3C4752',
            green: '#4CAF50',
            blue: '#03A9F4',
            red: '#F44336'
        }
    }
}
