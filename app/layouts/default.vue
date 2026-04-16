<template>

  <main>
    <slot/>
  </main>
  <!--  <CookieControl locale="en" />-->
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
useSeoMeta({
  // title: config.public.siteTitle || "",
  // ogTitle: config.public.siteTitle || "",
  // description: config.public.siteDescription || "",
  // ogDescription: config.public.siteDescription || "",
  // ogUrl: config.public.siteUrl || "",
  ogImage: `${config.public.siteUrl}/og-1200x630.jpg`,
  // ogImageWidth: 1200,
  // ogImageHeight: 630,
  // twitterCard: "summary_large_image",
});
useHead({

  meta: [
    {
      name: "mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-title",
      content: config.public.siteTitle || "",
    },
  ],

});


</script>
