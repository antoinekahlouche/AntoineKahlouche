import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
    server: {
        host: true,
        port: 3000
    },
    integrations: [svelte(), tailwind(), compress(), sitemap(), robotsTxt()],
    site: 'https://antoine.kahlouche.fr'
})
