<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import AOS from "aos";
import "@formkit/themes/genesis";
import "aos/dist/aos.css";
onMounted(() => {
  AOS.init({});
  const config = inject(Symbol.for("FormKitConfig"));
  config.locale = "ru";
});
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
 ]
})
</script>

<style>
body,
html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>
