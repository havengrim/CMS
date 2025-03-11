import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { UnpluginVueComponentsResolver, UnpluginDirectivesResolver, UnpluginModulesResolver } from 'maz-ui/resolvers'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  server: {
    port: 5174, // Change this to any available port
  },
  plugins: [
    tailwindcss(),
    vue(),
    Components({
      dts: true, // Generates TypeScript definitions (optional)
      resolvers: [
        UnpluginVueComponentsResolver(),
        UnpluginDirectivesResolver(),
        UnpluginModulesResolver(),
      ],
    }),
  ],
})
