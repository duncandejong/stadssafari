<template>
  <div
      class="main-gallery swiper slides-same-height w-full overflow-hidden relative">
    <div class="swiper-wrapper">
      <div
          class="swiper-slide"
          v-for="(image, index) in images"
          :key="index"
      >
        <NuxtPicture
            class="gallery-image-full"
            :src="image.img"
            :alt="image.alt"
            sizes="400px md:750px lg:1200px"
            quality="80"
            placeholder
            loading="lazy"
        />
      </div>
    </div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup lang="ts">
import Swiper from 'swiper';
import {Keyboard, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const props = defineProps({
  images: {
    type: Array as () => { img: string; alt?: string }[],
    required: true,
  },
});

onMounted(() => {
  new Swiper('.main-gallery', {
    modules: [Navigation, Pagination, Keyboard],
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
</script>

<style lang="css">
.main-gallery {
  --swiper-theme-color: var(--color-primary-light);
  --swiper-pagination-color: var(--color-primary-light);
  --swiper-navigation-color: var(--color-primary-light);
  --swiper-pagination-bullet-inactive-color: var(--color-neutral-500);
  --swiper-pagination-bullet-inactive-opacity: 0.5;
  max-width: var(--site-width);

}

.main-gallery {
  --swiper-navigation-size: 2.25rem;
  --swiper-navigation-sides-offset: 0.5rem;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-horizontal-gap: 4px;

  @media (min-width: 768px) {
    --swiper-navigation-size: 3rem;
    --swiper-navigation-sides-offset: 0.5rem;
    --swiper-pagination-bullet-size: 9px;
    --swiper-pagination-bullet-horizontal-gap: 5px;
  }
  @media (min-width: 1024px) {
    --swiper-navigation-size: 4rem;
    --swiper-navigation-sides-offset: 1rem;
    --swiper-pagination-bullet-size: 10px;
    --swiper-pagination-bullet-horizontal-gap: 6px;
  }
}

.gallery-image-full img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
