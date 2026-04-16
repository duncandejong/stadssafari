// plugins/vue-gtm.client.js
import {defineNuxtPlugin} from '#app'
import VueGtm from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
    const runtimeConfig = useRuntimeConfig().public;

    nuxtApp.vueApp.use(VueGtm, {
        id: runtimeConfig.googleTagManagerId,
        enabled: true,
        debug: runtimeConfig.environment === 'development',
        loadScript: true,
        vueRouter: useRouter(),
        defer: false,
        compatibility: false,
        // nonce: '2726c7f26c',
        // queryParams: {
        //   gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
        //   gtm_preview: 'env-4',
        //   gtm_cookies_win: 'x',
        // },
        trackOnNextTick: false,
        // globalPropertyName: '$gtm', // optioneel, als je nog `this.$gtm` wilt kunnen gebruiken
    });
});