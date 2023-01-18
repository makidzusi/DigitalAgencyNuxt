<template>
  <div
    class="bg-white mt-8 sm:mt-0 py-6 sm:py-8 lg:py-12 relative min-h-[100vh] flex flex-col-reverse sm:flex-col justify-center"
  >
    <div id="team" class="relative sm:absolute w-full h-full"></div>

    <div
      class="max-w-screen-2xl px-4 md:px-8 mx-auto z-10 relative sm:bg-black/40 rounded-md py-2"
    >
      <div class="max-w-xl flex flex-col items-center text-center mx-auto">
        <p
          class="sm:text-gray-100 text-gray-800 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6"
        >
          {{ $t("joinSection.title") }}
        </p>

        <h1
          class="sm:text-gray-100 text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12"
        >
          {{ $t("joinSection.description") }}
        </h1>

        <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
          <CareerModal>
            <button
              href="#"
              class="inline-block bg-red-600 hover:bg-red-700 active:bg-red-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              {{ $t("joinSection.btn") }}
            </button>
          </CareerModal>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import anim from "lottie-web";
import team from "../../animations/team.json";
onMounted(() => {
  document.getElementById("team").innerHTML = "";
  anim.loadAnimation({
    container: document.getElementById("team"),
    renderer: "svg",
    loop: true,
    animationData: team,
    autoplay: true,
  });
});
</script>
