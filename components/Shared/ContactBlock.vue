<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div
        class="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg gap-4 p-4 md:p-8"
      >
        <div>
          <h2 class="text-red-500 text-xl md:text-2xl font-bold">
            {{ $t('contactBlock.title') }}
          </h2>
          <p class="text-gray-600">
            {{ $t('contactBlock.subtitle') }}
          </p>
        </div>

       <ContactModal>
        <button
          class="inline-block bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
          {{ $t('contactBlock.button') }}</button
        >
       </ContactModal>
      </div>
    </div>
  </div>
</template>
