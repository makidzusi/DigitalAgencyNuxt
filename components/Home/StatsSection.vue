<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
      <div class="mb-8 md:mb-12" id="stats">
        <h2
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          {{ $t("statsSection.title") }}
        </h2>

        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          {{ $t("statsSection.description") }}
        </p>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-4 bg-red-600 rounded-lg gap-6 md:gap-8 p-6 md:p-8"
      >
        <div class="flex flex-col items-center">
          <div
            class="text-white text-xl sm:text-2xl md:text-3xl font-bold counter"
            data-count="30"
          >
            30
          </div>
          <div class="text-white text-sm sm:text-base">
            {{ $t("statsSection.stats.dev") }}
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="text-white text-xl sm:text-2xl md:text-3xl font-bold counter"
            data-count="500"
          >
            500
          </div>
          <div class="text-white text-sm sm:text-base">
            {{ $t("statsSection.stats.proj") }}
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="text-white text-xl sm:text-2xl md:text-3xl font-bold counter"
            data-count="200"
          >
            200
          </div>
          <div class="text-white text-sm sm:text-base">
            {{ $t("statsSection.stats.clients") }}
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            {{ $t("statsSection.stats.couple") }}
          </div>
          <div class="text-white text-sm sm:text-base">
            {{ $t("statsSection.stats.coffee") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import anime from "animejs";

onMounted(() => {
  startCounting();
  const target = document.querySelector("#stats");
  const options = {
    rootMargin: "0px",
    threshold: 0,
  };

  const trueCallback = function (entries, observer) {
    entries.forEach((entry) => {
      startCounting();
    });
  };
  const observer = new IntersectionObserver(trueCallback, options);
  observer.observe(target);
});

const startCounting = () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    anime({
      targets: counter,
      innerHTML: [0, counter.getAttribute("data-count")],
      easing: "easeInOutSine",
      round: 1,
      duration: 2000,
      complete: () => {
        counter.textContent = counter.textContent.trim() + "+";
      },
    });
  });
};
</script>
