<template>
  <VueFinalModal
      :modal-id="id"
      class="flex justify-center items-center px-4 md:px-8 bg-neutral-800"
      content-class="flex justify-center w-full h-full"
      @update:model-value="(val) => emit('update:modelValue', val)"
  >
    <div
        class="flex justify-center flex-col w-full"
        :style="aspectRatioMaxWidth()"
    >
      <button
          class="text-3xl md:text-4xl absolute right-6 md:right-8 top-6 md:top-8 ml-auto md:p-2 text-white hover:opacity-80 z-10 cursor-pointer"
          @click="vfm.close(id)"
          aria-label="Sluit"
      >
        <span class="sr-only">Sluit</span>
        <Icon name="ion:close-circle" size="1.4em"/>
      </button>

      <slot name="header">
        <h1 class="text-xl">
          {{ title }}
        </h1>
      </slot>

      <div class="embed-container" :style="aspectRatioPadding()">
        <slot/>
      </div>
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import {useVfm, VueFinalModal} from "vue-final-modal";

const vfm = useVfm();

const props = defineProps({
  embedAspectWidth: {
    type: Number,
    required: false,
    default: 16,
  },
  embedAspectHeight: {
    type: Number,
    required: false,
    default: 9,
  },
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
});

// Calculate the aspect ratio
const aspectRatioPadding = () => {
  return (
      "padding-bottom: " +
      (props.embedAspectHeight / props.embedAspectWidth) * 100 +
      "%"
  );
};
// Set the max width to the aspect ratio, so it will fit in the screen
const aspectRatioMaxWidth = () => {
  return (
      "max-width: " +
      ((props.embedAspectWidth / props.embedAspectHeight) * 100 - 18) +
      "vh"
  );
};

const emit = defineEmits<{
  (e: "update:modelValue", modelValue: boolean): void;
  (e: "confirm"): void;
}>();
</script>

<style lang="css">
/* height: 56.25vw; Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
/* min-width: 177.77vh; Given a 16:9 aspect ratio, 16/9*100 = 177.77 */

.embed-container {
  position: relative;
  padding-bottom: 57%;
  height: 0;
  width: 100%;
  /* overflow: hidden; */
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
