<template>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="mb-10 md:mb-16">
        <h2
          id="awards"
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          {{ $t("aboutGuaranteesSections.title") }}
        </h2>
        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          {{ $t("aboutGuaranteesSections.description") }}
        </p>
      </div>
      <Swiper
        :modules="[SwiperAutoplay, EffectCards]"
        :slides-per-view="1"
        :loop="true"
        :effect="'cards'"
        :grabCursor="true"
        :autoplay="{
          delay: 1500,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide v-for="(item, idx) in data" :key="`slide-${idx}`">
          <div
            class="flex items-center h-full flex-col bg-red-500 p-8 rounded-md w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              class="mb-4"
              height="44"
              viewBox="0 0 54 44"
              fill="none"
            >
              <path
                d="M19.7166 23.6693L10.2997 14.3761L0 24.5415L19.7166 44L54 10.1653L43.7003 0L19.7166 23.6693Z"
                fill="white"
              />
            </svg>
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
import { EffectCards } from "swiper";
const data = Array.from({ length: 4 }, (el, idx) => {
  return {
    title: `Lorem ipsum dolor sit amet`,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut quam non leo porta elementum.Phasellus ut quam non leo porta elementum.",
  };
});
</script>
