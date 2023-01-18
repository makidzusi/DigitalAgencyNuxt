<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
      <div class="mb-10 md:mb-16">
        <h2
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          {{ $t("lovedTechsSection.title") }}
        </h2>

        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          {{ $t("lovedTechsSection.subtitle") }}
        </p>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
        id="technologies"
      >
        <div
          class="flex flex-col items-center card"
          v-for="tech in techs"
          :key="tech.title"
        >
          <div class="blur"></div>
          <div
            class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4"
          >
            <NuxtImg
              :src="tech.img"
              quality="70"
              loading="lazy"
              format="webp"
              width="128"
              height="128"
              alt="Photo by Radu Florin"
              class="w-full h-full object-cover object-center"
            />
          </div>

          <div>
            <div class="text-gray-800 md:text-lg font-bold text-center">
              {{ tech.title }}
            </div>
            <p
              class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4"
            >
              {{ tech.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import anime from "animejs";
const { t } = useI18n();
const techs = [
  {
    title: t("lovedTechsSection.vue.title"),
    img: "vue.png",
    desc: t("lovedTechsSection.vue.desc"),
  },
  {
    img: "react.png",
    title: t("lovedTechsSection.react.title"),
    desc: t("lovedTechsSection.react.desc"),
  },
  {
    img: "bitrix.png",
    title: t("lovedTechsSection.bitrix.title"),
    desc: t("lovedTechsSection.bitrix.desc"),
  },
  {
    img: "docker.png",
    title: t("lovedTechsSection.docker.title"),
    desc: t("lovedTechsSection.docker.desc"),
  },
  {
    img: "electron.png",
    title: t("lovedTechsSection.electron.title"),
    desc: t("lovedTechsSection.electron.desc"),
  },
  {
    img: "gitlab.webp",
    title: t("lovedTechsSection.git.title"),
    desc: t("lovedTechsSection.git.desc"),
  },
  {
    img: "laravel.jpg",
    title: t("lovedTechsSection.laravel.title"),
    desc: t("lovedTechsSection.laravel.desc"),
  },
  {
    img: "custom.webp",
    title: t("lovedTechsSection.custom.title"),
    desc: t("lovedTechsSection.custom.desc"),
  },
];

onMounted(() => {
  const animation = anime({
    targets: "#technologies div",
    scale: [{ value: [0, 1], easing: "easeInOutQuad", duration: 500 }],
    rotateZ: [100, 0],
    delay: anime.stagger(200, { grid: [4, 2], from: "center" }),
  });
  const target = document.querySelector("#technologies");
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

<style scoped>
.blur {
  background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  filter: blur(56px);
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s;
  position: absolute;
  z-index: -1;
}
.card {
  cursor: pointer;
}
.card:hover .blur {
  opacity: 1;
}
</style>
