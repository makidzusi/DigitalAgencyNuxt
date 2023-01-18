<template>
  <header
    class="flex justify-between items-center py-4 md:py-8 mb-4"
    id="header"
  >
    <NuxtLink
      :to="localePath({ path: '/' })"
      active-class="text-white"
      exactActiveClass="text-white"
      class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
      aria-label="logo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="141"
        viewBox="0 0 323.42 58.77"
        id="logo"
      >
        <path
          fill="#000"
          d="M16.43 1H.07v37.26l16.05.02c11.96 0 19.78-5.42 19.78-19.42C35.9 6.59 28.43 1 16.43 1zm-1.55 28.56h-2.59V9.72h2.33c6.52 0 9.06 2.07 9.06 9.84 0 7-3.11 10-8.8 10zM38.9 11.13h10.77v27.13H38.9V11.13zM38.9 0h10.77v7.66H38.9V0zm34.85 14.73a10.31 10.31 0 0 0-8.23-4.35c-8.91 0-12.12 7.1-12.12 13.78C53.4 31.09 57.7 37 65.2 37c2.9.13 5.72-.95 7.77-3v2.24c0 3.89-1.24 5.28-4.35 5.28-.83.06-1.66-.18-2.33-.67-.37-.29-.61-.72-.67-1.19l-10.82.02c.52 3.98 4.55 7.82 14.13 7.82 13.36 0 14.29-6.37 14.29-14.5V11.13h-9.47v3.6zm-5.34 14.78c-2.89-.05-4.24-2.59-4.24-5.28 0-3.52.98-6.23 4.24-6.16 3.42 0 4.56 2.95 4.56 5.85 0 2.9-1.24 5.75-4.56 5.59zM87.05 0h10.77v7.66H87.05V0zm0 11.13h10.77v27.13H87.05V11.13zm28.09 0h5.17v6.21h-5.17v9.84c0 2.49.36 3.37 3.36 3.37h1.71l-.02 7.71c-14.13.78-15.84-.21-15.84-9.58V17.34h-3.83v-6.21h4V2.69h10.62v8.44zm37.72 23.14V21.55c0-6.47-.78-11.24-13.62-11.24-10.72 0-14.81 3.37-14.81 9.11h10.36c.26-2.32 2.28-2.63 3.78-2.63 1.14 0 3.52.22 3.52 2.22 0 5.08-19.31-.52-19.31 11.81 0 5.64 4.56 8.18 9.68 8.18 4.04 0 7.14-.79 10.2-3.64l.52 2.9h11.13v-.52c-1.45-1.14-1.45-1.91-1.45-3.47zm-15.53-1.33c-2.13 0-3.42-.93-3.42-2.28 0-3.52 4.66-2.69 8.18-4.4v-.01c.26 3.75-.98 6.68-4.76 6.69zM157.93 1h10.77v37.26h-10.77V1zm64.17 0l-9.26 37.28h-12l-4.29-21.64h-.11l-4.24 21.64h-12L170.93 1h11.8l4.2 23h.1l4.45-23h10.1L206 24h.11l4.19-23h11.8zm28.33 33.27V21.55c0-6.47-.78-11.24-13.62-11.24-10.72 0-14.81 3.37-14.81 9.11h10.39c.26-2.32 2.28-2.63 3.78-2.63 1.14 0 3.52.22 3.52 2.22 0 5.08-19.31-.52-19.31 11.81 0 5.64 4.55 8.18 9.68 8.18 4.04 0 7.14-.79 10.2-3.64l.51 2.9h11.11v-.52c-1.45-1.14-1.45-1.91-1.45-3.47zm-15.5-1.33c-2.13 0-3.42-.93-3.42-2.28 0-3.52 4.66-2.69 8.18-4.4v-.01c.31 3.75-.99 6.68-4.76 6.69zm48.35-10.91v16.23h-10.77V23.92c0-2.69-.72-5.08-3.78-5.08-3.31 0-4.19 2.13-4.19 5.6v13.82h-10.77V11.13h9.84v4.25c2.43-3.26 5.07-5 9.16-5 7.15 0 10.51 4.2 10.51 11.65zM305.8 1v12.84c-2.27-2.7-4.65-3.53-8.07-3.53-6.49 0-11.49 5.86-11.49 14.86 0 7.67 4.14 13.83 12.32 13.83 3.44 0 5.79-1 8.33-4.36v3.62h9.68V1H305.8zm-4.55 30.27c-3.52 0-4.25-3.16-4.25-6.16s.95-6.37 4.56-6.37 4.61 3.26 4.61 6.26c0 3.11-1.17 6.27-4.92 6.27z"
        />
        <path
          fill="#ED1C24"
          d="M316.58 58.77l-5.23-5.23H0V50.3h311.38l5.2-5.2 6.84 6.84-6.84 6.83z"
        />
      </svg>
    </NuxtLink>

    <nav class="hidden lg:flex gap-12">
      <NuxtLink
        active-class="text-red-600"
        v-for="link in links"
        :key="link"
        :to="localePath({ path: link.path })"
        class="text-gray-600 hover:text-red-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >{{ link.title }}</NuxtLink
      >
    </nav>

    <ClientOnly>
      <ContactModal>
        <div>
          <NuxtLink
            @click.stop
            class="mr-4 underline hover:text-red-600 lg:inline hidden"
            :to="switchLocalePath(locale === 'ru' ? 'en' : 'ru')"
          >
            {{ locale === "ru" ? "English" : "Russian" }}
          </NuxtLink>
          <button
            class="hidden lg:inline-block bg-red-500 hover:bg-red-700 focus-visible:ring ring-indigo-300 text-white active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            {{ t("header.button") }}
          </button>
        </div>
      </ContactModal>
    </ClientOnly>
    <Transition name="slide">
      <div
        v-if="isDrawerOpened"
        class="fixed top-0 left-0 w-[100vw] h-[100vh] bg-white z-10"
      >
        <div class="flex flex-col p-12">
          <NuxtLink
            @click="isDrawerOpened = false"
            active-class="text-red-600"
            v-for="link in links"
            :key="link"
            :to="localePath({ path: link.path })"
            class="text-gray-600 hover:text-red-500 active:text-indigo-700 text-2xl font-semibold transition duration-100"
            >{{ link.title }}</NuxtLink
          >
          <NuxtLink
            class="mr-4 underline hover:text-red-600 mt-4"
            :to="switchLocalePath(locale === 'ru' ? 'en' : 'ru')"
          >
            {{ locale === "ru" ? "English" : "Russian" }}
          </NuxtLink>
        </div>
      </div>
    </Transition>

    <button
      type="button"
      @click="isDrawerOpened = !isDrawerOpened"
      class="inline-flex z-20 items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>

      {{ t("header.menu") }}
    </button>
  </header>
</template>

<script setup>
const isDrawerOpened = ref(false);
const localePath = useLocalePath();
const route = useRoute();
watch(route, () => {
  isDrawerOpened.value = false;
});
const { locale, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const links = [
  {
    title: t("header.links.home"),
    path: "/",
  },
  {
    title: t("header.links.career"),
    path: "/career",
  },
  {
    title: t("header.links.blogs"),
    path: "/blogs",
  },
  {
    title: t("header.links.about"),
    path: "/about",
  },
];
</script>

<style scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-enter-from {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
