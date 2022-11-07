/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,json,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            sans: 'JetBrains Mono, Arial'
        },
        colors: {
            accent: '#FFB300',
            bg: {
                primary: '#171C24',
                secondary: '#252C35'
            },
            text: {
                primary: '#FFFFFF',
                secondary: '#909EAB',
                tertiary: '#212B36'
            },
            border: '#3C4752',
            green: '#4CAF50',
            blue: '#03A9F4',
            red: '#F44336'
        }
    }
}
