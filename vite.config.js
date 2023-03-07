import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue({ template: {
//     compilerOptions: {
//       // treat all tags with a dash as custom elements
//       isCustomElement: (tag) => tag.includes('-')
//     }
//   }})],
//   build: {
//     lib: {
//       // Could also be a dictionary or array of multiple entry points
//       entry: './src/main.ce.js',
//       name: 'Custom element',
//       // the proper extensions will be added
//       fileName: 'my-lib',
//     },
// }})
