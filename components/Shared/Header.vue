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
      <h1 class="text-black text-2xl">DigitalAgency</h1>
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
