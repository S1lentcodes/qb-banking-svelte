import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: [
      'index.html',
      'src/**/*.{svelte,html,js}',
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
  safelist: [
    [].concat.apply([], ['red', 'blue', 'green'].map(i => [`bg-${i}-700`,`hover:bg-${i}-800`,`active:bg-${i}-900`,`focus:ring-${i}-600`])),
  ],
})