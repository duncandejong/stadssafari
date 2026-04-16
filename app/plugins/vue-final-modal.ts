import { createVfm } from "vue-final-modal";

// https://vue-final-modal.org/

export default defineNuxtPlugin((nuxtApp) => {
  const vfm = createVfm() as any;

  nuxtApp.vueApp.use(vfm);
});
