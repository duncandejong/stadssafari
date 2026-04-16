<template>
  <div class="hero flex relative overflow-hidden">
    <div class="site-width py-6 md:py-10 px-4 md:px-6 flex flex-col items-center justify-start">
      <slot/>
    </div>

    <!-- Background image -->
    <div
        v-if="bgImage"
        :style="{ backgroundImage: `url(${bgImage})` }"
        class="absolute inset-0 -z-50 bg-cover bg-center text-white"/>

    <!-- Vimeo video -->
    <div v-if="vimeoId" class="absolute inset-0 -z-40 bg-neutral-900">
      <div class="hero-wrapper">
        <div class="overlay"/>
        <div id="heroVideo"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {markRaw, nextTick, onMounted, onUnmounted, shallowRef, watch,} from 'vue'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Player from '@vimeo/player'

gsap.registerPlugin(ScrollTrigger)

/* -------------------------------- props -------------------------------- */
const props = defineProps({
  vimeoId: String,
  bgImage: String,
})

/* ----------------------------- reactive refs --------------------------- */
const playerRef = shallowRef<Player | null>(null)
const playerReady = shallowRef(false)
const isPlaying = shallowRef(false)

/* ------------------------- gsap handles / cleanup ---------------------- */
let scrollTriggerInstance: ScrollTrigger | null = null
let overlayTimeline: gsap.core.Timeline | null = null

const destroyPlayer = async (player: Player) => {
  // SDK >= v2 heeft destroy(); typings weten het soms niet.
  const anyPlayer = player as any
  if (typeof anyPlayer.destroy === 'function') {
    await anyPlayer.destroy().catch(() => {
    })
  } else {
    await player.unload().catch(() => {
    })
    // iframe handmatig weghalen om memory-leaks te voorkomen
    anyPlayer.element?.remove?.()
  }
}

const cleanAll = async () => {
  scrollTriggerInstance?.kill()
  overlayTimeline?.kill()
  scrollTriggerInstance = null
  overlayTimeline = null

  if (playerRef.value) {
    await destroyPlayer(playerRef.value)
    playerRef.value = null
    playerReady.value = false
    isPlaying.value = false
  }
}

/* ------------------------- utilities ---------------------------------- */
const isUsable = () => playerReady.value && playerRef.value !== null

const ignorePlayInterrupted = (err: any) => {
  if (/interrupted/i.test(err?.message ?? '')) return
  console.warn(err)
}

const playVideo = () => {
  if (!isUsable() || isPlaying.value) return
  playerRef.value!.play().catch(ignorePlayInterrupted)
}

const pauseVideo = () => {
  if (!isUsable() || !isPlaying.value) return
  playerRef.value!.pause().catch(() => {
  })
}

/* --------------------------- init logic -------------------------------- */
const initHeroVideo = async () => {
  if (!props.vimeoId) return
  await cleanAll()
  await nextTick()

  const el = document.getElementById('heroVideo')
  if (!el) return console.warn('[Vimeo] #heroVideo niet gevonden')

  const player = new Player(el, {
    id: Number(props.vimeoId),
    background: true,
    muted: true,
    dnt: true,
  })

  playerRef.value = markRaw(player)

  player.on('play', () => (isPlaying.value = true))
  player.on('pause', () => (isPlaying.value = false))

  player
      .ready()
      .then(() => {
        playerReady.value = true

        scrollTriggerInstance = ScrollTrigger.create({
          trigger: '.hero-wrapper',
          start: 'top center',
          end: 'bottom center',
          toggleClass: {targets: '.hero-wrapper', className: 'active'},
          onEnter: playVideo,
          onEnterBack: playVideo,
          onLeave: pauseVideo,
          onLeaveBack: pauseVideo,
        })

        overlayTimeline = gsap
            .timeline({
              scrollTrigger: {
                trigger: '.hero',
                scrub: true,
                start: 'top top',
                end: 'bottom top',
              },
            })
            .to('.overlay', {opacity: 1, ease: 'none'})
      })
      .catch((err) => console.warn('[Vimeo] Player ready error', err))
}

/* -------------------------- lifecycle hooks --------------------------- */
onMounted(() => {
  initHeroVideo()
})

onUnmounted(() => {
  cleanAll()
})

watch(
    () => props.vimeoId,
    () => {
      initHeroVideo()
    }
)
</script>

<style lang="css">
.hero {
  min-height: 65vh;
}

@media (min-width: 768px) {
  .hero {
    min-height: 80vh;
  }
}

.hero-wrapper {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -11;
  pointer-events: none;
  overflow: hidden;
}

.hero-wrapper iframe {
  width: 100vw;
  height: 56.25vw; /* 16:9 */
  min-height: 100vh;
  min-width: 177.77vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay {
  background-color: rgba(0, 0, 0, 0.94);
  opacity: 0;
  position: absolute;
  inset: 0;
  z-index: 2;
}
</style>