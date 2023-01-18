<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12" id="sec">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto relative">
      <div class="mb-10 md:mb-16">
        <h2
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          {{ $t("homeAdvSection.title") }}
        </h2>

        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          {{ $t("homeAdvSection.desc") }}
        </p>
      </div>

      <div
        class="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16"
        id="features"
      >
        <div
          v-for="item in 6"
          class="flex gap-4 md:gap-6 shadow hover:shadow-red-500/40 cursor-pointer p-4 rounded"
        >
          <div
            class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-red-600 text-white rounded-lg md:rounded-xl shadow-lg"
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
            <h3 class="text-lg md:text-xl font-semibold mb-2">Example adv</h3>
            <p class="text-gray-500 mb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              error iste maiores, quam facilis odit perferendis, aliquid
              explicabo est, omnis recusandae quasi a excepturi velit? Velit,
              aut? Iste, in quis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import anime from "animejs";

onMounted(() => {
  const animation = anime({
    targets: "#features div",
    scale: [0, 1],
    delay: anime.stagger(200, { grid: [3, 2], from: "center" }),
  });
  const target = document.querySelector("#features");
  const options = {
    rootMargin: "100px",
    threshold: 1,
  };

  const trueCallback = function (entries, observer) {
    animation.restart();
  };
  const observer = new IntersectionObserver(trueCallback, options);
  observer.observe(target);
});
</script>
