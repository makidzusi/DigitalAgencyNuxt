// https://nuxt.com/docs/api/configuration/nuxt-config
import ru from './lang/ru.json';
import en from './lang/en.json';
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-swiper",
    "@formkit/nuxt",
    "@nuxtjs/i18n",
    '@nuxt/image-edge',
  ],
  // formkit: {
  //   defaultConfig: false,
  //   configFile: './formkit.config.ts'
  // },
  image: {
    staticFilename: '[publicPath]/[name]-[hash][ext]',
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes("-"),
    },
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: 'ru',
    vueI18n: {
      legacy: false,
      messages: {
        en,
        ru,
      },
    },
  },
  app: {
    baseURL: '',
    head: {
      link: [
        {
          rel: "icon",
          href: "",
        },
      ],
    },
  },
  tailwindcss: {
    config: {
      content: ["content/**/**.md"],
      plugins: [require("@tailwindcss/typography")],
    },
  },
});
