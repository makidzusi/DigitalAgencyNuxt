<template>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <SharedHeader/>

      <section
        class="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48"
      >
        <NuxtImg
          alt="Hero section bg"
          quality="70"
          class="w-full h-full object-cover object-center absolute inset-0"
          src="hero_banner.jpg"
        />

        <div class="bg-red-600 mix-blend-multiply absolute inset-0"></div>

        <div class="sm:max-w-xl flex flex-col items-center relative p-4">
          <p
            class="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8"
          >
            {{ $t("heroSection.subtitle") }}
          </p>
          <div class="ml6">
            <h1
              class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12 letters"
            >
              {{ $t("heroSection.title") }}
            </h1>
          </div>

          <div
            class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5"
          >
            <ContactModal>
              <button
                class="inline-block w-full bg-red-500 hover:bg-red-700 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                {{ $t("heroSection.buttons[0]") }}
              </button>
            </ContactModal>

            <a
              href="#awards"
              class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >{{ $t("heroSection.buttons[1]") }}</a
            >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import anime from "animejs";
onMounted(() => {
  var textWrapper = document.querySelector(".letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
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
});
</script>
