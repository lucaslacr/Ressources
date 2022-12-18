// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
app: {
  head: {
    title: "Ressources en design graphique et d'interaction",
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "Ressources en design graphique et d'interaction" },
        { property: 'og:title', content: 'Ressources DGI' },
        { property: 'og:image', content: 'https://ressources.lucaslacroix.com/icon.png' },
        { property: 'og:description', content: "Ressources et outils en design graphique et d'interaction, site alimenté par une veille critique et continue" },
        { name: 'theme-color', content: '#eeedf3' }
    ],

    link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]}},

  plugins: [
    { src: '~/plugins/matomo-p.js', ssr: false }
  ],
  ssr: false
})