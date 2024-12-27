import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        svgLoader()
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern',
                additionalData: `@use "@/assets/scss/prepend.scss" as *;`
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            components: fileURLToPath(
                new URL('./src/components', import.meta.url)
            ),
            sections: fileURLToPath(
                new URL('./src/components/sections', import.meta.url)
            ),
            common: fileURLToPath(
                new URL('./src/components/common', import.meta.url)
            ),
            core: fileURLToPath(
                new URL('./src/components/core', import.meta.url)
            ),
            ui: fileURLToPath(new URL('./src/components/ui', import.meta.url)),
            icons: fileURLToPath(
                new URL('./src/assets/icons', import.meta.url)
            ),
            layouts: fileURLToPath(new URL('./src/layouts', import.meta.url)),
            api: fileURLToPath(new URL('./src/api', import.meta.url))
        }
    },
    envPrefix: 'APP'
})
