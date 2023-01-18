<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="mb-10 md:mb-16">
        <h2
          id="today-ancor"
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          {{ $t("todaySections.title") }}
        </h2>

        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          {{ $t("todaySections.description") }}
        </p>
      </div>

      <div
        class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8"
        id="features"
      >
        <div
          class="flex flex-col border rounded-lg p-4 md:p-6 hover:shadow-red-500/40 shadow cursor-pointer"
          v-for="feature in features"
          :key="feature.label"
        >
          <h3 class="text-lg md:text-xl font-semibold mb-2">
            {{ feature.label }}
          </h3>
          <p class="text-gray-500 mb-4">{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import anime from "animejs";

const features = Array.from({ length: 6 }, (el, idx) => {
  return {
    label: `Example adv ${idx}`,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut quam non leo porta elementum.",
  };
});

onMounted(() => {
  const animation = anime({
    targets: "#features div",
    scale: [{ value: [0, 1], easing: "easeInOutQuad", duration: 500 }],
    rotateZ: [100, 0],
    delay: anime.stagger(200, { grid: [3, 2], from: "center" }),
  });

  const target = document.querySelector("#features");
  const options = {
    rootMargin: "0px",
    threshold: 0,
  };

  const trueCallback = function (entries, observer) {
    entries.forEach((entry) => {
      animation.restart();
    });
  };
  const observer = new IntersectionObserver(trueCallback, options);
  observer.observe(target);
});
</script>
