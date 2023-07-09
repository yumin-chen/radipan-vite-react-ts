import { defineConfig } from "radipan/config"

export default defineConfig({
  // Path to app entry point
  appEntry: 'src/App.ts',

  // Whether to use css reset
  preflight: true,

  // Files to exclude
  exclude: [],


  // Useful for theme customization
  theme: {
    extend: {}
  },

  // The output directory for your css system
  outdir: "styled-system",


})
