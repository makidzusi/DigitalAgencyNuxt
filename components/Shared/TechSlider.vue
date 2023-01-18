<template>
  <div class="bg-white">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="mb-10 md:mb-16">
        <h2
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          {{ $t("techsSlider.title") }}
        </h2>
      </div>
      <div>
        <div class="flex justify-between flex-col xl:flex-row gap-4 xl:gap-0">
          <div v-for="(tech, idx) in data">
            <div
              class="flex items-center justify-between xl:justify-start gap-8"
            >
              <h3 class="text-xl font-bold">{{ tech.label }}</h3>
              <button
                @click="selectedIndex = idx"
                :class="{
                  'before:rotate-90': selectedIndex === idx,
                }"
                class="h-[64px] before:transition before:ease-in-out before:delay-150 flex items-center justify-center w-[64px] bg-red-600 rounded-full hover:bg-gray-800 after:content-[''] after:w-6 after:h-1 after:block after:bg-white before:w-1 before:h-6 before:absolute after:rounded before:rounded before:block before:bg-white"
              ></button>
            </div>
            <Transition
              enter-active-class="duration-300 ease-out"
              enter-from-class="transform opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="duration-200 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="transform opacity-0"
            >
              <div v-show="selectedIndex === idx" class="xl:hidden p-3">
                <Swiper
                  :breakpoints="{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    480: {
                      slidesPerView: 1.5,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }"
                >
                  <SwiperSlide v-for="item in data[selectedIndex].techs">
                    <div
                      class="h-[250px] m-2 p-2 min-w-[190px] flex flex-grow shadow rounded flex-col items-center justify-center"
                    >
                      <img
                        class="w-[100px] h-[100px] object-cover rounded"
                        :src="item.img"
                        alt=""
                      />
                      <h3 class="text-lg md:text-xl font-semibold mb-2 mt-2">
                        {{ item.title }}
                      </h3>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Transition>
          </div>
        </div>
        <div class="hidden xl:flex">
          <Swiper :slidesPerView="3">
            <SwiperSlide v-for="item in data[selectedIndex].techs">
              <div
                class="h-[250px] min-w-[190px] p-2 m-2 flex flex-grow shadow rounded flex-col items-center justify-center"
              >
                <img
                  class="w-[100px] h-[100px] object-cover rounded"
                  :src="item.img"
                  alt=""
                />
                <h3 class="text-lg md:text-xl font-semibold mb-2 mt-2">
                  {{ item.title }}
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";

const selectedIndex = ref(0);

const data = [
  {
    label: "Frameworks",
    techs: [
      {
        img: "https://hsto.org/getpro/habr/upload_files/379/f1d/4a0/379f1d4a0b8492b450af020f6abd8130.png",
        title: "Yii",
      },
      {
        img: "https://avatars.githubusercontent.com/u/143937?v=4",
        title: "Symfony",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
        title: "Laravel",
      },
      {
        img: "https://www.phpdevelopmentcompany.com/wp-content/uploads/2018/05/z1.jpg",
        title: "Zend",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Phalcon_logo.png",
        title: "Phalcon",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png",
        title: "Python/Django",
      },
    ],
  },
  {
    label: "CMS",
    techs: [
      {
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/51/1c_bitrix_logo.svg/768px-1c_bitrix_logo.svg.png",
        title: "1C-Битрикс",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Druplicon.vector.svg/1200px-Druplicon.vector.svg.png",
        title: "Drupal",
      },
      {
        img: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
        title: "WordPress",
      },
    ],
  },
  {
    label: "Database",
    techs: [
      {
        img: "https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png",
        title: "MySQL / PostgreSQL",
      },
      {
        img: "https://g.foolcdn.com/art/companylogos/square/mdb.png",
        title: "MongoDB",
      },
      {
        img: "https://cdn.iconscout.com/icon/free/png-256/rabbitmq-282296.png",
        title: "RabbitMQ",
      },
      {
        img: "https://plugins.jetbrains.com/files/14512/251043/icon/pluginIcon.png",
        title: "Sphinx / ElasticSearch",
      },
      {
        img: "https://avatars.githubusercontent.com/u/1529926?s=200&v=4",
        title: "Redis / Memcache",
      },
    ],
  },
  {
    label: "Frontend",
    techs: [
      {
        img: "https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png",
        title: "Vue",
      },
      { img: "https://ru.reactjs.org/logo-og.png", title: "React" },
      {
        img: "https://miro.medium.com/max/683/1*F9QwZsjxEcwZRD0CaKTBEQ.png",
        title: "SASS / LESS / Stylus",
      },
      {
        img: "https://frontips.ru/assets/images/pug/bg.jpg",
        title: "Pug (ex. Jade)",
      },
    ],
  },
  {
    label: "Mobile",
    techs: [
      {
        img: "https://www.ixbt.com/img/n1/news/2022/2/3/Mobile_Operating_System_Popularity_Across_Countries_large.jpg",
        title: "iOS / Android",
      },
      {
        img: "https://static.javatpoint.com/tutorial/phonegap/images/phonegap.png",
        title: "Phonegap",
      },
      {
        img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lgj0fcmxtlyj8jeto4ix",
        title: "Ionic",
      },
      {
        img: "https://images.ctfassets.net/aq13lwl6616q/2gqVi4hhjq9vgvdh63UoKZ/c763c6f7e98a80eb2800bbe5eb9d690d/react_native_zero_to_mastery.png",
        title: "React Native",
      },
    ],
  },
];
</script>
