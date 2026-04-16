<template>
  <div class="site-width">
    <ClientOnly>
      <Btn
          ref="ticketBtn"
          class="floating-button shadow md:shadow-md btn-lg md:btn-xl lg:btn-xl grow-0 fixed top-3 z-30"
          variant="solid"
          color="primary"
          href="#tickets"
          id="ticket-btn"
          btn-text="Koop tickets"
          icon="ion:ticket"
          @click="handleClick"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import {nextTick, onMounted, onUnmounted, ref} from 'vue'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGtm} from '@gtm-support/vue-gtm'

gsap.registerPlugin(ScrollTrigger)

const ticketBtn = ref<HTMLElement | null>(null)
const ticketsSection = ref<HTMLElement | null>(null)

let scrollTriggerInstance: ScrollTrigger | null = null
let resizeObserver: ResizeObserver | null = null

function handleClick() {
  if (import.meta.client) {
    const gtm = useGtm()
    gtm?.push?.({
      event: 'cta_click',
      cta_id: 'koop-tickets-button',
      cta_text: 'Koop tickets',
    })
  }
}

onMounted(async () => {
  await nextTick()

  const ticketButtonEl = document.getElementById('ticket-btn')
  ticketsSection.value = document.getElementById('tickets')

  if (!ticketButtonEl || !ticketsSection.value) return

  scrollTriggerInstance = ScrollTrigger.create({
    trigger: ticketsSection.value,
    start: 'top top+=40px',
    end: 'bottom top',
    toggleClass: {
      targets: ticketButtonEl,
      className: 'js-hide-btn',
    },
  })

  let lastHeight = ticketsSection.value.clientHeight

  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === ticketsSection.value) {
          const newHeight = entry.target.clientHeight
          if (newHeight !== lastHeight) {
            lastHeight = newHeight
            scrollTriggerInstance?.refresh()
          }
        }
      }
    })

    resizeObserver.observe(ticketsSection.value)
  }
})

onUnmounted(() => {
  scrollTriggerInstance?.kill()
  if (ticketsSection.value && resizeObserver) {
    resizeObserver.unobserve(ticketsSection.value)
  }
})
</script>

<style lang="css">
.floating-button {
  transition: all 0.25s ease-in-out;
}

.floating-button.js-hide-btn {
  transform: translateY(-80px);
  opacity: 0;
  pointer-events: none;
}
</style>