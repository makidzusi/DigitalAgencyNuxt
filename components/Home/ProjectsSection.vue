<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <h2
        class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12"
      >
        {{ $t("projectsSection.title") }}
      </h2>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8"
        id="projects"
      >
        <a
          v-for="proj in filteredProjects"
          :key="proj.label"
          href="#"
          class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
        >
          <NuxtImg
            :src="proj.img"
            :alt="proj.img"
            quality="80"
            format="webp"
            loading="lazy"
            class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
          />

          <div
            class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"
          ></div>

          <span
            class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3"
            >{{ proj.label }}</span
          >
        </a>
      </div>

      <div class="flex justify-between items-start sm:items-center gap-8">
        <p class="max-w-screen-sm text-gray-500 text-sm lg:text-base">
          {{ $t("projectsSection.description") }}
        </p>

        <button
          @click="isShowMore = !isShowMore"
          class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
        >
          {{
            isShowMore
              ? $t("projectsSection.moreBtn.active")
              : $t("projectsSection.moreBtn.nonActive")
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import anime from "animejs";
const isShowMore = ref(false);
const projects = Array.from({ length: 8 }, (index) => {
  return {
    label: "Example Project",
    img: "project.jpg",
  };
});
const filteredProjects = computed(() => {
  if (isShowMore.value) {
    return projects;
  }
  return projects.slice(0, 4);
});

onMounted(() => {
  const animation = anime({
    targets: "#projects a",
    scale: [0, 1],
    delay: anime.stagger(200, { grid: [1, 4], from: "center" }),
  });
  const target = document.querySelector("#projects");
  const options = {
    rootMargin: "0px",
    threshold: [0, 0.5],
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
