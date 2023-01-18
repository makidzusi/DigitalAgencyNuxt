<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="mb-10 md:mb-16">
        <h2
          id="today-ancor"
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          {{ $t("careerAdvSections.title") }}
        </h2>
      </div>
      <Swiper
        :modules="[SwiperAutoplay, EffectCube, Scrollbar]"
        :slides-per-view="1"
        :loop="true"
        :scrollbar="{
          hide: false,
        }"
        :effect="'cube'"
        :grab-cursor="true"
        class="max-w-[1000px]"
        :cubeEffect="{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }"
        :autoplay="{
          delay: 1500,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide
          v-for="(item, idx) in data"
          :key="`slide-${idx}`"
          class="h-[250px]"
        >
          <div
            class="flex items-center flex-col p-8 rounded-md bg-red-500 h-[250px]"
            :class="`bg-red-${100 * idx}`"
          >
            <div
              class="rounded-lg bg-red-800 h-14 w-14 rotate-45 mb-5 flex items-center justify-center"
            >
              <span class="text-white -rotate-45 block">{{ idx + 1 }}</span>
            </div>
            <h3 class="text-lg text-white md:text-xl font-semibold mb-2">
              {{ item.title }}
            </h3>
            <p class="text-gray-100 text-sm md:text-base">
              {{ item.desc }}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { EffectCube, Scrollbar } from "swiper";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
const data = Array.from({ length: 4 }, (el, idx) => {
  return {
    title: `Example adv ${idx}`,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut quam non leo porta elementum.",
  };
});
</script>

<style lang="scss">
.swiper-scrollbar {
  bottom: -45px !important;
}
.swiper-scrollbar-drag {
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}
</style>
