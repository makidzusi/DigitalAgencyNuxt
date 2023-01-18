<template>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="mb-10 md:mb-16">
        <h2
          id="awards"
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          {{ $t("aboutFeaturesSection.title") }}
        </h2>
        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          {{ $t("aboutFeaturesSection.description") }}
        </p>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          data-aos="fade-right"
          class="flex flex-col md:flex-row gap-12 items-center flex-1 flex-wrap md:flex-nowrap"
        >
          <img
            class="w-[176px] rounded"
            src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
            alt=""
          />
          <div class="text-center md:text-left">
            <h3 class="text-lg md:text-xl font-semibold mb-2">
              {{ $t("aboutFeaturesSection.items[0].title") }}
            </h3>
            <p class="text-gray-500 mb-2">
              {{ $t("aboutFeaturesSection.items[0].description") }}
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          class="flex flex-col md:flex-row gap-12 items-center flex-1 flex-wrap md:flex-nowrap"
        >
          <img
            class="w-[176px] rounded"
            src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
            alt=""
          />
          <div class="text-center md:text-left">
            <h3 class="text-lg md:text-xl font-semibold mb-2">
              {{ $t("aboutFeaturesSection.items[1].title") }}
            </h3>
            <p class="text-gray-500 mb-2">
              {{ $t("aboutFeaturesSection.items[1].description") }}
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
