<template>
  <div>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="mb-10 md:mb-16">
          <h2
            class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
          >
            {{ $t("directionsSection.title") }}
          </h2>

          <p
            class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto"
          >
            {{ $t("directionsSection.description") }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          <div
            data-aos-duration="2500"
            data-aos="fade-right"
            class="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <div id="back" class="w-full h-full absolute"></div>

            <div
              class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"
            ></div>

            <span
              class="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3"
              >Backend</span
            >
          </div>

          <div
            href="#"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            class="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <div id="front" class="h-full w-full absolute"></div>

            <div
              class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"
            ></div>

            <span
              class="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3"
              >Frontend</span
            >
          </div>

          <div
            href="#"
            data-aos="fade-left"
            data-aos-duration="1500"
            class="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <div id="mobile" class="w-full h-full absolute"></div>

            <div
              class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"
            ></div>

            <span
              class="inline-block text-gray-200 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3"
              >Mobile</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import boxAnimation from "../../animations/laptop.json";
import back from "../../animations/back.json";
import mobile from "../../animations/mobile.json";
import anim from "lottie-web";
onMounted(() => {
  document.getElementById("front").innerHTML = "";
  document.getElementById("back").innerHTML = "";
  document.getElementById("mobile").innerHTML = "";
  anim.loadAnimation({
    container: document.getElementById("front"),
    renderer: "svg",
    loop: true,
    animationData: boxAnimation,
    autoplay: true,
  });
  anim.loadAnimation({
    container: document.getElementById("back"),
    renderer: "svg",
    loop: true,
    animationData: back,
    autoplay: true,
  });
  anim.loadAnimation({
    container: document.getElementById("mobile"),
    renderer: "svg",
    loop: true,
    animationData: mobile,
    autoplay: true,
  });
});
</script>
