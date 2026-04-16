<template xmlns="http://www.w3.org/1999/html">
  <div class="site-width mx-auto section-padding">
    <div class="prose prose-sm md:prose-base max-w-full">
      <h1>Cookie Verklaring</h1>
      <div id="cookieDeclaration"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({layout: "default", key: "cookie"});
const config = useRuntimeConfig();

onMounted(() => {
  if (config.public.cookiebotId) {
    const script = document.createElement('script')
    script.id = "CookieDeclaration"
    script.type = "text/javascript"
    script.async = true
    script.src = 'https://consent.cookiebot.com/' + config.public.cookiebotId + '/cd.js'
    document.getElementById('cookieDeclaration')?.appendChild(script);
  }
});

// onMounted(() => {
//   const script = document.createElement("script")
//   script.id = "CookieDeclaration"
//   script.type = "text/javascript"
//   script.async = true
//   script.setAttribute("data-cookiescriptreport", "report")
//   script.src = `//report.cookie-script.com/r/${config.public.cookiescriptId}.js`
//
//   document.getElementById("cookieDeclaration")?.appendChild(script)
// })

</script>