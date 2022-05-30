import vue from '@vitejs/plugin-vue'
import {defineConfig} from "vite";
import {resolve} from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    plugins: [
        vue(),
    ],
    server: {
        proxy: {
            "/xxx": {
                target: "http://localhost:8000/api/v1",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/xxx/, ""),
            },
        },
    },
});
