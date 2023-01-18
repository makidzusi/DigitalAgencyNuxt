<template>
  <div>
    <Head>
      <Meta property="og:url" content="/" />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="DigitalAgenct" />
      <Meta property="og:description" content="Our blogs" />
      <Meta name="description" content="Our blogs" />
      <Title>Blogs</Title>
      <Meta property="og:image" content="" />

      <Meta name="twitter:card" content="summary_large_image" />
      <Meta property="twitter:domain" content="/" />
      <Meta property="twitter:url" content="/" />
      <Meta name="twitter:title" content="DigitalAgenc" />
      <Meta name="twitter:description" content="Our blogs" />
      <Meta name="twitter:image" content="" />
    </Head>
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <SharedHeader/>
    </div>

    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="mb-10 md:mb-16">
          <h2
            class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
          >
            {{ $t('blogsSections.title') }}
          </h2>

          <p
            class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto"
          >
          {{ $t('blogsSections.desc') }}
          </p>
        </div>

        <div
          class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8"
        >
          <ContentList v-slot="{ list }" :path="locale">
            <NuxtLink
              data-aos="fade-up"
              v-for="blog in list"
              :key="blog._id"
              :to="blog._path"
              class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
            >
              <img
                :src="blog?.img"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div
                class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"
              ></div>

              <div class="relative p-4 mt-auto">
                <h2
                  class="text-white text-xl font-semibold transition duration-100 mb-2"
                >
                  {{ blog?.title }}
                </h2>

                <span class="text-indigo-300 font-semibold">{{ $t('blogsSections.readBtn') }}</span>
              </div>
            </NuxtLink>
          </ContentList>
        </div>
      </div>
    </div>
    <SharedFooterSection />
  </div>
</template>

<script setup>
const { locale } = useI18n();
</script>
