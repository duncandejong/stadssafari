<script setup lang="ts">
import type {NuxtError} from '#app'

const props = defineProps<{ error: NuxtError }>()

const statusCode = computed(() => props.error?.statusCode ?? 500)

const title = computed(() => {
  if (statusCode.value === 404) return 'Pagina niet gevonden'
  return 'Er is iets misgegaan'
})

const message = computed(() => {
  if (statusCode.value === 404) {
    return 'Deze pagina bestaat niet (meer) of de URL is onjuist.'
  }
  const sm = props.error?.statusText?.trim()
  return sm && sm.length > 3
      ? sm
      : 'Probeer het later opnieuw of ga terug naar de homepage.'
})

useHead(() => ({
  title: `${statusCode.value} · ${title.value}`,
  meta: [
    {name: 'robots', content: 'noindex, nofollow'}
  ]
}))

function goHome() {
  clearError({redirect: '/'})
}
</script>

<template>
  <div class="flex grow flex-col text-center">
    <section class="flex items-center h-full p-16">
      <div
          class="container flex flex-col items-center justify-center px-5 mx-auto my-8 p-12"
      >
        <div class="max-w-md text-center">
          <p class="text-sm opacity-70">{{ title }}</p>

          <h1 class="font-heading text-7xl md:text-8xl leading-none mt-3">
            <span class="sr-only">Error </span>{{ statusCode }}
          </h1>

          <p class="text-lg md:text-xl mt-4">
            {{ message }}
          </p>

          <div class="mt-8 flex items-center justify-center gap-3">
            <Btn
                class="btn btn-primary btn-sm md:btn-md"
                @click="goHome"
                btn-text="Naar de homepage"
                icon="ion:home-outline"
                icon-position="left"
            />
            <NuxtLink class="btn btn-ghost btn-sm md:btn-md" to="/">
              Home
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
