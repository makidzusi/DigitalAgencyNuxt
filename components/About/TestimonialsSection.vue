<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
      <h2
        class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12"
      >
        {{ $t('aboutTestimonialsSection.title') }}
      </h2>

      <div class="grid md:grid-cols-2 gap-4 md:gap-8">
        <div
          data-aos="fade-right"
          class="flex flex-col items-center bg-red-500 rounded-lg gap-4 md:gap-6 px-8 py-6 shadow-lg hover:shadow-red-500 cursor-pointer"
        >
          <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
            <div
              class="w-12 md:w-14 h-12 flex items-center justify-center md:h-14 bg-gray-100 border-2 border-indigo-100 rounded-full p-2 overflow-hidden"
            >
              <img
                src="./images/cup.svg"
                loading="lazy"
                alt="Photo by Radu Florin"
                class="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div class="max-w-md text-white lg:text-lg text-center">
            {{ $t('aboutTestimonialsSection.items[0]') }}
          </div>
        </div>

        <div
          data-aos="fade-left"
          class="flex flex-col items-center bg-red-500 rounded-lg gap-4 md:gap-6 px-8 py-6 shadow-lg hover:shadow-red-500 cursor-pointer"
        >
          <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
            <div
              class="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 flex items-center justify-center border-indigo-100 rounded-full p-2 overflow-hidden"
            >
              <img
                src="./images/like.svg"
                loading="lazy"
                alt="Photo by christian ferrer"
                class="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div class="max-w-md text-white lg:text-lg text-center">
            {{ $t('aboutTestimonialsSection.items[1]') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
