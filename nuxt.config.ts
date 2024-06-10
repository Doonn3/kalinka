// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  srcDir: "./src",
  css: ["~/assets/main.scss"],
  modules: ["@nuxt/image"],
  nitro: {
    preset: "vercel",
  },
});
