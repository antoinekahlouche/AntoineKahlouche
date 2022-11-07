import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
    server: {
        host: true,
        port: 3000
    },
    integrations: [svelte(), tailwind()],
    site: 'https://antoine.kahlouche.fr'
})
