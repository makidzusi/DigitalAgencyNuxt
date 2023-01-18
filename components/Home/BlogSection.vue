<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">

      <div class="mb-10 md:mb-16">
        <h2
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          {{ $t('blogsSections.title') }}
        </h2>

        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          {{ $t('blogsSections.desc') }}
        </p>
      </div>
   

      <div
        class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8"
      >
        <ContentList v-slot="{ list }" :path="locale">
          <div
            data-aos="fade-up"
            v-for="blog in list"
            :key="blog?.id"
            class="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden shadow hover:shadow-red-500/40 cursor-pointer"
          >
            <a
              href="#"
              class="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
            >
              <NuxtImg
                :src="blog?.img"
                loading="lazy"
                quality="70"
                width="192"
                height="168"
                :alt="blog?.title"
                class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />
            </a>

            <div class="flex flex-col gap-2 p-4 lg:p-6">
              <span class="text-gray-400 text-sm">{{ blog?.date }}</span>

              <h2 class="text-gray-800 text-xl font-bold">
                <RouterLink
                  :to="blog._path"
                  class="hover:text-red-500 active:text-red-600 transition duration-100"
                  >{{ blog?.title }}</RouterLink
                >
              </h2>

              <p class="text-gray-500">
                {{ blog?.desc }}
              </p>

              <div>
                <RouterLink
                  :to="blog._path"
                  class="text-red-500 hover:text-red-600 active:text-red-700 font-semibold transition duration-100"
                  >
                  {{ $t('blogsSections.readBtn') }}</RouterLink
                >
              </div>
            </div>
          </div>
        </ContentList>
      </div>
    </div>
  </div>
</template>

<script setup>
const {locale} = useI18n()
</script>
