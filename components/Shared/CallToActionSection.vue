<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div
        class="md:h-80 flex flex-col sm:flex-row bg-gray-200 rounded-lg overflow-hidden"
      >
        <div
          class="w-full sm:w-1/2 lg:w-2/5 h-48 sm:h-auto order-first sm:order-none"
          style="background: #f8fafc"
        >
          <div id="anim" class="w-full h-full"></div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8">
          <h2
            class="text-gray-800 text-xl md:text-2xl lg:text-4xl font-bold mb-4"
          >
            {{ $t('callToActionSections.title') }}
          </h2>

          <p class="max-w-md text-gray-600 mb-8">
            {{ $t('callToActionSections.subtitle') }}
          </p>

          <div class="mt-auto">
            <ContactModal>
              <button
                class="inline-block bg-red-500 hover:bg-red-700 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
              {{ $t('callToActionSections.btn') }}
              </button>
            </ContactModal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import boxAnimation from "../../animations/box.json";
import anim from "lottie-web";

onMounted(() => {
  anim.loadAnimation({
    container: document.getElementById("anim"),
    renderer: "svg",
    loop: true,
    animationData: boxAnimation,
    autoplay: true,
  });
});
</script>
