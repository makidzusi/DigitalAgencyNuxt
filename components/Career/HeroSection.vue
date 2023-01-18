<template>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <SharedHeader/>

      <section
        class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16"
      >
        <div
          class="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24"
        >
          <p
            class="text-red-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6"
          >
            {{ $t("careerHeroSection.subtitle") }}
          </p>

          <h1
            id="title"
            class="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12"
          >
            {{ $t("careerHeroSection.title") }}
          </h1>

          <p
            class="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12"
          >
            {{ $t("careerHeroSection.description") }}
          </p>

          <div
            class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5"
          >
            <CareerModal>
              <button
                class="inline-block w-full bg-red-600 hover:bg-red-700 active:bg-red-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                {{ $t("careerHeroSection.buttons[0]") }}
              </button>
            </CareerModal>

            <a
              href="#today-ancor"
              class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              {{ $t("careerHeroSection.buttons[1]") }}</a
            >
          </div>
        </div>

        <div
          class="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg"
        >
          <div id="hero" class="h-full w-full"></div>

          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import boxAnimation from "../../animations/programmer.json";
import anim from "lottie-web";
import anime from "animejs";

onMounted(() => {
  var textWrapper = document.querySelector("#title");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  const animation = anime
    .timeline({ loop: true })
    .add({
      targets: ".letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 300 + 30 * i,
    })
    .add({
      targets: ".letter",
      translateY: [0, -100],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1200,
      delay: (el, i) => 100 + 30 * i,
    });
  animation.play();
  document.getElementById("hero").innerHTML = "";

  anim.loadAnimation({
    container: document.getElementById("hero"),
    renderer: "svg",
    loop: true,
    animationData: boxAnimation,
    autoplay: true,
  });
});
</script>
