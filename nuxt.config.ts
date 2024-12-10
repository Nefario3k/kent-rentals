// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    head: {
      titleTemplate: "%s",
      title: "Kent Rentals.ng | Your estate rental solution",
      meta: [
        // meta data
        { charset: "UTF-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Kent Rentals.ng | Your estate rental solution",
        },
        { hid: "og:url", property: "og:url", content: "/" },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Your estate rental solution. Our curated collection features a range of high-quality facial products designed for both men and women. From nourishing creams to refreshing sprays, we have everything you need to achieve a healthy, radiant complexion. Explore our selection and find the perfect products to suit your skincare needs.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/logo.png",
        },

        // twitter card
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        { hid: "twitter:site", name: "twitter:site", content: "@Kent-rentals" },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Kent Rentals.ng | Your estate rental solution",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Your estate rental solution. Our curated collection features a range of high-quality facial products designed for both men and women. From nourishing creams to refreshing sprays, we have everything you need to achieve a healthy, radiant complexion. Explore our selection and find the perfect products to suit your skincare needs.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/logo.png",
        },

        { hid: "author", name: "author", content: "Kent Rentals.ng" },
        {
          hid: "description",
          name: "description",
          content:
            "Your estate rental solution. Our curated collection features a range of high-quality facial products designed for both men and women. From nourishing creams to refreshing sprays, we have everything you need to achieve a healthy, radiant complexion. Explore our selection and find the perfect products to suit your skincare needs.",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "manifest", href: "/site.webmanifest" },
        {
          hid: "icon",
          rel: "icon",
          type: "image/png",
          href: "/logo.png",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.jpg",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          hid: "shortcut-icon",
          rel: "shortcut icon",
          type: "image/png",
          href: "/logo.png",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.lordicon.com/lordicon.js",
          type: "text/javascript",
          body: true,
          defer: false,
        },
      ],
    },
  },
  // sourcemap: false,
  // components: true,
  imports: {
    // dirs: ["~/composables", "~/composables/modules"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
    // "vue-currency-input",
    // "@nuxtjs/sitemap",
    // "@sidebase/nuxt-auth",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  vite: {
    esbuild: {
      // Ensure target is a string
      target: "es2022",
    },
    resolve: {
      alias: {
        // Ensure aliases are strings
        "@": "/src",
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  build: {
    transpile: ["vuetify", "lord-icon"],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'lord-icon'
    }
  },

  css: [
    "~/assets/styles/variables.scss",
    "~/assets/styles/reusable.scss",
    "~/assets/styles/main.scss",
    "~/assets/styles/transitions.scss",
    "~/assets/styles/responsive.scss",
  ],
  // auth: {
  //   baseURL: process.env.API_BASE_URL,
  //   globalAppMiddleware: true,
  //   provider: {
  //     type: "local",
  //     endpoints: {
  //       signIn: { path: "login", method: "post" },
  //       signOut: { path: "logout", method: "post" },
  //       signUp: { path: "register", method: "post" },
  //       getSession: { path: "account/profile", method: "get" },
  //       // getSession: false,
  //     },
  //     token: {
  //       signInResponseTokenPointer: "/auth_token",
  //       // type: 'Bearer',
  //       maxAgeInSeconds: 2592000,
  //       autoLogout: false,
  //     },
  //     pages: {
  //       login: "/",
  //     },
  //   },
  // },

  // sitemap: {
  //   xsl: false,
  //   hostname: process.env.LANDING_PAGE_URL,
  //   cacheTime: 600000,
  //   gzip: true,
  //   i18n: true,
  // },

  // site: {
  //   url: process.env.LANDING_PAGE_URL,
  // },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL,
      env: {
        API_BASE_URL: process.env.API_BASE_URL,
      },
    },
  },
});
