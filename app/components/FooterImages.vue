<template>
  <footer class="site-width">
    <div
        class="flex justify-center items-center flex-wrap gap-y-2 gap-x-4 md:gap-x-6 p-2"
    >
      <NuxtPicture
          v-for="(image, index) in images"
          :key="index"
          :src="image.img"
          :alt="image.alt"
          sizes="sm:100px md:200px"
          quality="80"
          loading="lazy"
          class="object-contain"
      />
      <slot></slot>
    </div>

  </footer>
</template>

<script setup lang="ts">
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  image: String
});
</script>

<style lang="css">
footer picture {
  display: flex;
  flex-basis: 25%;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  /* filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.3)); */
}

@media (min-width: 450px) {
  footer picture {
    flex-basis: 12%;
  }
}

@media (min-width: 768px) {
  footer picture {
    flex-basis: 8%;
  }
}

footer picture img {
  object-fit: contain;
  display: inline-block !important;
  height: 16px;
  width: 100%;
  max-width: 90px;
}

@media (min-width: 768px) {
  footer picture img {
    height: 28px;
    max-width: 80px;
  }
}

@media (min-width: 1024px) {
  footer picture img {
    height: 30px;
  }
}

@media (min-width: 1280px) {
  footer picture img {
    height: 32px;
  }
}
</style>

