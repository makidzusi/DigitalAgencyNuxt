<template>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <SharedHeader />
      <ContentDoc v-slot="{ doc }">
        <Meta name="description" :content="doc.title" />
        <Head>
          <Meta property="og:url" content="https://digitalwand.ru/blogs" />
          <Meta property="og:type" content="website" />
          <Meta property="og:title" content="DigitalWand" />
          <Meta property="og:description" :content="doc.title" />
          <Meta property="og:image" :content="doc.img" />

          <Meta name="twitter:card" content="summary_large_image" />
          <Meta property="twitter:domain" content="digitalwand.ru/blogs" />
          <Meta property="twitter:url" content="https://digitalwand.ru/blogs" />
          <Meta name="twitter:title" content="DigitalWand" />
          <Meta name="twitter:description" :content="doc.title" />
          <Meta name="twitter:image" :content="doc.img" />
        </Head>
        <ContentRenderer class="prose max-w-full" :value="doc" />
      </ContentDoc>
      <FooterSection />
    </div>
  </div>
</template>
