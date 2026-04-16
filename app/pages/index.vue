<template xmlns="http://www.w3.org/1999/html">

  <!--
    <Navigation
        :menuItems="[
            { link: '#synopsis', label: 'Verhaal' },
            { link: '#videos', label: 'Video\'s' },
            { link: '#tickets', label: 'Tickets' },
            { link: '#kleurplaat', label: 'Kleurplaat' },
            { link: '#gallery', label: 'Foto\'s' },
          ]"
        :useScrollSpy="true"
        :scrollSpyOffset="100"
    />
  -->

  <Hero vimeo-id="1183643378">
    <ClientOnly>
      <!--      <div
                class="label self-end  hidden sm:flex absolute mt-0  flex-col gap-2">
              <div class="bg-neutral-700 text-white whitespace-nowrap px-2 text-sm md:text-base lg:text-lg ">
                <span v-if="isAfterRelease" class="text-primary-light font-bold">Nu</span><span v-else
                                                                                                class="text-primary-light font-bold">{{
                  formatDate(movie.releaseDate, 'dayMonth')
                }}</span> in de bioscoop
              </div>
            </div>-->

    </ClientOnly>
    <div
        class="w-full flex flex-col justify-center items-center grow gap-4 md:gap-6 pb-4 md:pb-6"
    >
      <NuxtImg
          :alt="movie.title"
          :src="movie.titleImage"
          sizes="sm:500px lg:1000px"
          class="mt-12 w-[90%] sm:w-[80%] flex justify-center object-contain flex-col items-center max-h-[50vh] min-h-[200px]"
          format="avif,webp"
          loading="lazy"
      />

      <Btn
          btn-text="Bekijk trailer"
          class="btn-primary btn-lg md:btn-xl lg:btn-2xl shadow-sm"
          icon="ion:play"
          @click="vfm.open('trailer'); $gtm.push({ event:'cta_click',
          cta_id: 'trailer-button',
          cta_text: 'Trailer' })"
      />

      <!--      <div class="text-white flex text-4xl md:text-5xl gap-5 md:gap-6 leading-3 justify-center items-center">-->
      <!--        <a-->
      <!--            href="https://www.facebook.com/gusto.ent/?locale=nl_NL"-->
      <!--            target="_blank"-->
      <!--            rel="noopener"-->
      <!--            aria-label="Facebook"-->
      <!--            class="hover:opacity-80"-->
      <!--            @click="gtm.push({ event:'social_click', platform_name: 'Facebook' })"-->
      <!--        >-->
      <!--          <Icon name="ion:logo-facebook"/>-->
      <!--        </a>-->
      <!--        <a-->
      <!--            href="https://www.instagram.com/gusto.ent/"-->
      <!--            target="_blank"-->
      <!--            rel="noopener"-->
      <!--            aria-label="Instagram"-->
      <!--            class="hover:opacity-80"-->
      <!--            @click="gtm.push({ event:'social_click', platform_name: 'Instagram' })"-->
      <!--        >-->
      <!--          <Icon name="ion:logo-instagram"/>-->
      <!--        </a>-->
      <!--              <a-->
      <!--                  href="https://www.tiktok.com/@detattasfilm"-->
      <!--                  target="_blank"-->
      <!--                  rel="noopener"-->
      <!--                  aria-label="TikTok"-->
      <!--                  class="hover:opacity-80"-->
      <!--                  @click="gtm.push({ event:'social_click', platform_name: 'TikTok' })"-->
      <!--              >-->
      <!--                <Icon name="ion:logo-tiktok"/>-->
      <!--              </a>-->
      <!--                      <a-->
      <!--                          href="https://open.spotify.com/track/3un2WIIEbZ1gUUQVTdXPmt?si=4fa797400b6b4d4b&nd=1&dlsi=271a059340a84e97"-->
      <!--                          target="_blank"-->
      <!--                          rel="noopener"-->
      <!--                          aria-label="Spotify"-->
      <!--                          class="hover:opacity-80"-->
      <!--                          @click="gtm.push({ event:'social_click', platform_name: 'Spotify' })">-->
      <!--                        <Icon name="mdi:spotify"/>-->
      <!--                      </a>-->
      <!--                                  <a-->
      <!--                                      href="https://www.linkedin.com/showcase/planet-soil-movie/"-->
      <!--                                      target="_blank"-->
      <!--                                      rel="noopener"-->
      <!--                                      aria-label="Linkedin"-->
      <!--                                      class="hover:opacity-80"-->
      <!--                                      @click="gtm.push({ event:'social_click', platform_name: 'LinkedIn' })"-->
      <!--                                  >-->
      <!--                                    <Icon name="ion:logo-linkedin"/>-->
      <!--                                  </a>-->
      <!--                          <a-->
      <!--                              href="https://www.youtube.com/@PlanetSoilMovie"-->
      <!--                              target="_blank"-->
      <!--                              rel="noopener"-->
      <!--                              aria-label="YouTube"-->
      <!--                              class="hover:opacity-80"-->
      <!--                              @click="gtm.push({ event:'social_click', platform_name: 'YouTube' })"-->
      <!--                          >-->
      <!--                            <Icon name="ion:logo-youtube"/>-->
      <!--                          </a>-->
      <!--      </div>-->
    </div>
  </Hero>


  <section
      class="text-center px-3 py-2 md:px-4 md:py-2.5 bg-neutral-700 text-white">
    <div class="site-width">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-title leading-tight">
        Theatercollege van de makers van De Nieuwe Wildernis en De Wilde Noordzee</h2>
    </div>
  </section>

  <section
      class="section-padding synopsis clear-both bg-white"
      id="synopsis">
    <div class="site-width relative">
      <div
          class="grid md:grid-cols-3 justify-center gap-6 items-center"
      >

        <NuxtImg
            alt="Poster"
            v-bind:src="movie.poster"
            sizes="sm:400px md:750px"
            format="avif,webp"
            placeholder
            class="max-h-87.5 md:max-h-162.5 mx-auto object-contain rounded md:rounded-lg select-none pointer-events-none shadow md:shadow-lg shadow-neutral-200"
            loading="lazy"
        />

        <div class="md:order-2 md:col-span-2 p-4 md:p-0">
          <!--          <h3 class="text-xl md:text-2xl font-semibold text-secondary">-->
          <!--            Een meedogenloze jacht op succes.</h3>-->
          <div class="prose lg:text-lg">
            <p class="lead">
              Een echte safari speelt zich niet af in een verre jungle. De meest verrassende natuur vindt u gewoon om de
              hoek, in uw achtertuin of balkon, op het dak van uw woning of in de spleten van het trottoir in uw straat
              en stad. </p>
            <p>
              Bioloog Luc Hoogenstein bewijst het in Ecolopolis: Stadssafari, een meeslepend theatercollege van
              de makers van de bioscoophits De Nieuwe Wildernis en De Wilde Noordzee. Met nooit eerder vertoonde
              natuurbeelden neemt Hoogenstein u mee op een reis door de verborgen wereld van de stadsnatuur. Verhalen
              over schimmels die vliegen in zombies veranderen tot mieren die bladluizen houden als vee, van
              spectaculair jagende slechtvalken boven de skyline tot egelfamilies onder de heg. En van de meer dan
              duizend soorten die hij ontdekte in zijn eigen stadstuintje in Utrecht. Stadssafari is een avond vol
              verwondering, humor en herkenning. Na afloop kijkt u nooit meer op dezelfde manier naar uw eigen
              straat. </p>
          </div>
          <!--          <div class="credits flex flex-row gap-1">
                      <LazySvgoKijkwijzerLeeftijd12 class="kijkwijzer"/>
                      <LazySvgoKijkwijzerAngst class="kijkwijzer"/>
                      <LazySvgoKijkwijzerSex class="kijkwijzer"/>
                      <LazySvgoKijkwijzerGrofTaalgebruik class="kijkwijzer"/>
                    </div>-->
        </div>
      </div>
    </div>
  </section>

  <section
      class="text-center flex flex-col justify-center items-center px-3 py-2 md:px-4 md:py-3 bg-linear-to-r from-primary-darker to-primary-darkest  text-white">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-title leading-tight">
      Kijk anders, zie meer!
      <!--      <ClientOnly>-->
      <!--        <span v-if="isAfterRelease">Nu</span><span v-else>{{ formatDate(movie.releaseDate, 'dayMonth') }}</span>-->
      <!--        in de filmtheaters-->
      <!--      </ClientOnly>-->
    </h2>
  </section>

  <section id="tickets"
           class="section-padding bg-neutral-100">
    <ClientOnly>
      <FloatingButton/>
    </ClientOnly>
    <div class="max-w-3xl mx-auto z-10 relative">
      <h3 class="section-heading flex text-neutral-800 items-center gap-3">
        Tickets
        <Icon name="ion:ticket" class="icon"/>
      </h3>
      <div class=" sm:text-base md:text-lg lg:text-lg relative z-10">
        <div>
          Hier komen de tickets
        </div>
      </div>
    </div>

  </section>
  <section id="gallery" class="section-padding section-gallery relative bg-white">
    <div class="site-width">
      <h3 class="section-heading inline-flex text-primary-lighter">
        Foto's</h3>
    </div>
    <div class="site-width">
      <Gallery class="ring-2 md:ring-4 ring-neutral-500 bg-neutral-700" :images="galleryImages"/>
    </div>
    <div class="pt-4 md:pt-6" v-if="footerLogos">
      <FooterImages :images="footerLogos"/>
    </div>
    <div class="site-width">
      <div class="flex justify-end items-center w-full mt-3 md:mt-5 gap-4">
        <!--        <NuxtLink to="https://www.dmenzo.com" target="_blank" external-->
        <!--                  class="text-sm md:text-base underline hover:no-underline text-center text-primary-lightest px-1 rounded-sm">-->
        <!--          Privacyverklaring-->
        <!--        </NuxtLink>-->
        <NuxtLink v-if="cookieBot" to="/cookieverklaring" target="_blank"
                  class="text-sm md:text-base underline hover:no-underline text-center text-primary-lightest px-1 rounded-sm">
          Cookieverklaring
        </NuxtLink>
      </div>
    </div>
  </section>
  <Modal id="trailer" :embed-aspect-width="16" :embed-aspect-height="9">
    <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/gfG9ck_LhDM"
        title="trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
    ></iframe>
  </Modal>

</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useDateFormat} from "~/composables/useDateFormat";
import {useVfm} from "vue-final-modal";
import {useGtm} from "@gtm-support/vue-gtm";
import Hero from "~/components/Hero.vue";
import Btn from "~/components/Btn.vue";
import FloatingButton from "~/components/FloatingButton.vue";
import Gallery from "~/components/Gallery.vue";
import FooterImages from "~/components/FooterImages.vue";
import Modal from "~/components/Modal.vue";

definePageMeta({layout: "default", key: "index"});

const gtm = useGtm();

const {formatDate} = useDateFormat();

const vfm = useVfm();
const runtimeConfig = useRuntimeConfig();
const movieTitle = runtimeConfig.public.movieTitle;
const mooveeApiKey = runtimeConfig.public.mooveeApiKey;
const cookieBot = runtimeConfig.public?.cookiebotId ?? false;
// const cookieScript = runtimeConfig.public?.cookiescriptId ?? false;

const movie = {
  title: movieTitle,
  titleImage: "stadssafari-logo-white.png",
  poster: "poster.jpg",
  releaseDate: new Date("2026-03-05T00:00:00+01:00"),
};

const isAfterRelease = computed(() => new Date() >= movie.releaseDate)

const footerLogos = [
  {img: "/logo-mn-media-white.png", alt: "MN Media"},
  {img: "/logo-impact-entertainment.png", alt: "Impact Entertainment"},
  {img: "/logo-ecopolis.png", alt: "Ecopolis"}
];
const galleryImages = [
  {
    img: "/stadssafari-01.jpg",
    alt: "Stadssafari"
  },
  {
    img: "/stadssafari-02.jpg",
    alt: "Stadssafari"
  },
  {
    img: "/stadssafari-03.jpg",
    alt: "Stadssafari"
  },
  {
    img: "/stadssafari-04.jpg",
    alt: "Stadssafari"
  },
  {
    img: "/stadssafari-05.jpg",
    alt: "Stadssafari"
  }
];


</script>

<style>
.section-gallery {
  background-color: var(--color-neutral-200);
  background-image: url("/bg-gallery.jpg");
  /* background-image: linear-gradient(103.23deg, #FEFA5A 0%, #FC6923 74%, #FC4B28 100%); */
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
</style>
