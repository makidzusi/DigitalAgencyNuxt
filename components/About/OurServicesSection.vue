<template>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="mb-10 md:mb-16">
        <h2
          id="awards"
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          {{ $t("aboutServerSection.title") }}
        </h2>
        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          {{ $t("aboutServerSection.description") }}
        </p>
      </div>
      <div
        class="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16 mt-2"
      >
        <div
          data-aos="flip-left"
          :data-aos-delay="idx * 50"
          class="flex gap-4 md:gap-6 items-center p-3 shadow-sm cursor-pointer hover:shadow-red-400 rounded-md"
          v-for="(serivice, idx) in services"
        >
          <div
            class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-red-500 text-white rounded-lg md:rounded-xl shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>

          <div>
            <p class="text-gray-500 mb-2">
              {{ serivice }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = Array.from({ length: 9 }, (el, idx) => `Feature ${idx}`);
</script>
