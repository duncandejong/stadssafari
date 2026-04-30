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

  <Hero vimeo-id="1185871702">
    <NuxtImg
        src="/hopper-1.png"
        alt="Hopper"
        class="w-20 md:w-24 lg:w-32 absolute top-4 right-4 z-10"
        loading="lazy"
    />
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
          class="mt-12 w-[60%] sm:w-[50%] flex justify-center object-contain flex-col items-center max-h-[50vh] min-h-50 drop-shadow-xl"
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
      class="text-center px-3 py-2 md:px-4 md:py-2.5 bg-secondary-dark text-white relative">
    <NuxtImg
        src="/bee-1.png"
        alt="Bee"
        class="w-8 md:w-12 lg:w-16 absolute bottom-0 right-1/6 -translate-x-1/2 translate-y-1/2 z-10 animate-hover"
        loading="lazy"
    />
    <div class="site-width">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-title leading-tight">
        Van de makers van <br class="md:hidden"/><i
          class="text-secondary-lighter font-serif whitespace-nowrap">De Nieuwe Wildernis</i>
        en <i class="text-secondary-lighter font-serif whitespace-nowrap">De Wilde Noordzee</i>
      </h2>
    </div>
  </section>

  <section
      class="section-padding synopsis clear-both bg-white"
      id="synopsis">
    <div class="site-width relative">
      <div
          class="grid md:grid-cols-3 justify-center gap-6 items-center"
      >

        <div class="relative mx-auto">
          <NuxtImg
              alt="Poster"
              v-bind:src="movie.poster"
              sizes="sm:400px md:750px"
              format="avif,webp"
              placeholder
              class="max-h-87.5 md:max-h-162.5 mx-auto object-contain rounded md:rounded-lg select-none pointer-events-none shadow md:shadow-lg shadow-neutral-200"
              loading="lazy"
          />
          <!--          <NuxtImg-->
          <!--              src="/ladybug.png"-->
          <!--              alt="Ladybug"-->
          <!--              class="w-8 md:w-12 absolute bottom-10 -left-4 md:-left-6 z-10"-->
          <!--              loading="lazy"-->
          <!--          />-->
        </div>

        <div class="md:order-2 md:col-span-2 p-4 md:p-0">
          <!--          <h3 class="text-xl md:text-2xl font-semibold text-secondary">-->
          <!--            Een meedogenloze jacht op succes.</h3>-->
          <div class="prose lg:text-lg  font-serif">
            <p class="lead">
              Stel je voor: je loopt door de stad en je ziet beton, asfalt, verkeer. Maar wat als je wist dat er onder
              je voeten, boven je hoofd en om je heen een complete wildernis schuilgaat? Mieren die bladluizen houden
              zoals boeren hun vee. Vleermuizen en nachtvlinders die in het donker je straat overnemen. En het
              onvergetelijke geluid van vrijende egels in je achtertuin. <br><strong>De stad is wilder dan je
              denkt.</strong></p>
            <p>
              In Stadssafari neemt bioloog Luc Hoogenstein je mee op een ongekende reis door de natuur in je eigen stad.
              Met adembenemende beelden, meeslepende verhalen en een flinke dosis humor opent hij je ogen voor een
              wereld die altijd al om je heen was. Na dit theatercollege zul je nooit meer op dezelfde manier door je
              straat lopen.</p>
            <p>Stadssafari is een productie van MN Media, de makers van De Wilde Noordzee, De Nieuwe Wildernis en Onder
              het Maaiveld. Voor het eerst brengen zij hun kenmerkende blik op de natuur van het grote doek naar het
              theater. Het resultaat? Een avond die je raakt, verrast en anders naar buiten laat lopen.
            </p>
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

  <section class="section-padding bg-linear-to-br from-secondary-dark to-tertiary-dark">
    <div class="site-width max-w-225">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-primary relative">
          <NuxtImg
              src="/ladybug.png"
              alt="Ladybug"
              class="w-8 md:w-10 absolute -left-4 top-4 z-10"
              loading="lazy"
          />
          <blockquote class="prose italic lg:text-lg font-serif text-neutral-700">
            “Vanuit de ruimte zag ik hoe bijzonder het leven op aarde is. Maar je hoeft niet 400 kilometer omhoog om
            verwonderd te raken. Stadssafari laat zien dat de meest spectaculaire natuur gewoon om de hoek leeft. Ga
            Kijken!”
          </blockquote>
          <cite class="block mt-4 font-title text-secondary-dark not-italic">— André Kuipers (astronaut)</cite>
        </div>
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-secondary-light">
          <blockquote class="prose italic lg:text-lg font-serif text-neutral-700">
            “Om mensen in beweging en meer met groen en natuur te doen moet je ze te weten te raken en te inspireren.
            Dat is precies wat er gebeurt tijdens de theatershow Stadssafari met Luc Hoogenstein”
          </blockquote>
          <cite class="block mt-4 font-title text-secondary-dark not-italic">— Lodewijk Hoekstra (de bekendste tuinman
            van Nederland)</cite>
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding bg-neutral-200" id="over-luc">
    <div class="site-width max-w-225">
      <div class="grid md:grid-cols-3 gap-4 items-center">
        <div class="md:col-span-1 md:order-2 justify-center items-center flex">
          <NuxtImg
              src="/luc-hoogenstein.jpg"
              alt="Luc Hoogenstein"
              sizes="sm:300px md:500px"
              format="avif,webp"
              class="w-full rounded-lg shadow-lg max-w-[50vw]"
              loading="lazy"
          />
        </div>
        <div class="md:col-span-2 md:order-1 p-4">
          <h3 class="text-2xl md:text-3xl font-title text-secondary-dark">Over Luc</h3>
          <div class="prose lg:text-lg font-serif">
            <p>
              Luc Hoogenstein is bioloog, presentator, natuurfotograaf, columnist en schrijver van diverse natuurboeken,
              waaronder het veel geprezen ‘Mijn 1000 soortentuin’, over de adembenemende natuur in zijn eigen stadstuin.
              Luc is met regelmaat te gast in een verscheidenheid aan tv- en radioprogramma’s, waaronder Vroege Vogels.
              Hij heeft in het verleden onder andere gewerkt bij Natuurmonumenten en Vogelbescherming.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
      class="text-center flex flex-col justify-center items-center px-3 py-2 md:px-4 md:py-3 bg-linear-to-r from-tertiary-dark to-tertiary-darker text-white relative">
    <NuxtImg
        src="/hopper-2.png"
        alt="Hopper"
        class="w-24 md:w-32 lg:w-40 absolute top-1 -translate-y-full z-10"
        loading="lazy"
    />
    <h2 class="text-4xl md:text-4xl lg:text-5xl font-title leading-tight text-primary-light">
      Kijk anders, zie meer!
      <!--      <ClientOnly>-->
      <!--        <span v-if="isAfterRelease">Nu</span><span v-else>{{ formatDate(movie.releaseDate, 'dayMonth') }}</span>-->
      <!--        in de filmtheaters-->
      <!--      </ClientOnly>-->
    </h2>
  </section>

  <section id="tickets"
           class="section-padding bg-secondary-lighter">
    <ClientOnly>
      <FloatingButton/>
    </ClientOnly>
    <div class="max-w-3xl mx-auto z-10 relative">
      <h3 class="section-heading flex text-neutral-800 items-center gap-3">
        Tickets
        <Icon name="ion:ticket" class="icon"/>
      </h3>
      <div class=" sm:text-base md:text-lg lg:text-lg relative z-10  font-serif">
        <iframe src=https://www.impactentertainment.nl/voorstelling/stadssafari-2627/speellijst-iframe frameBorder="0"
                width="100%" height="577"></iframe>
      </div>
    </div>

  </section>
  <section id="gallery" class="section-padding section-gallery relative bg-white">
    <NuxtImg
        src="/bee-2.png"
        alt="Bee"
        class="w-12 md:w-16 lg:w-20 absolute top-0 left-4 md:left-8 -translate-y-1/2 z-10 animate-hover"
        loading="lazy"
    />
    <div class="site-width">
      <h3 class="section-heading inline-flex text-primary-light">
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
        <!--        <NuxtLink v-if="cookieBot" to="/cookieverklaring" target="_blank"-->
        <!--                  class="text-sm md:text-base underline hover:no-underline text-center text-primary-lightest px-1 rounded-sm">-->
        <!--          Cookieverklaring-->
        <!--        </NuxtLink>-->
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

  {img: "/logo-impact-entertainment.png", alt: "Impact Entertainment"},
  {img: "/logo-ecopolis.png", alt: "Ecopolis"},
  {img: "/logo-bpd-cultuurfonds.png", alt: "BPD Cultuurfonds"},
  {img: "/logo-gemeente-amsterdam.png", alt: "Gemeente Amsterdam"},
  {img: "/logo-green-choice.png", alt: "Green Choice"},
  {img: "/logo-greenlabel.png", alt: "Greenlabel"},
  {img: "/logo-the-greenlabel-institute.png", alt: "The Greenlabel Institute"},
  {img: "/logo-on-the-move-to.png", alt: "On the move to"},
  {img: "/logo-provincie-zuid-holland.png", alt: "Provincie Zuid Holland"},
  {img: "/logo-tauw.png", alt: "Tauw"},
  {img: "/logo-nl-adviseurs.png", alt: "NL Adviseurs"},
  {img: "/logo-collectief-natuurinclusief-3.png", alt: "Collectief Natuurinclusief"},
  {img: "/logo-waternet-gemeente-amsterdam.png", alt: "Waternet Gemeente Amsterdam"},
  {img: "/logo-donker-groep.png", alt: "Donker Groep"},
  {img: "/logo-mn-media-white.png", alt: "MN Media"},
];
const galleryImages = [
  {
    img: "/stadssafari-03.jpg",
    alt: "Stadssafari"
  },
  {
    img: "/stadssafari-02.jpg",
    alt: "Stadssafari"
  },
  {
    img: "/stadssafari-04.jpg",
    alt: "Stadssafari"
  },
  {
    img: "/stadssafari-05.jpg",
    alt: "Stadssafari"
  },
  {
    img: "/stadssafari-06.jpg",
    alt: "Stadssafari"
  },
  {
    img: "/stadssafari-01.jpg",
    alt: "Stadssafari"
  }
];


</script>

<style>
@keyframes hover {
  0%, 100% {
    transform: translateY(50%);
  }
  50% {
    transform: translateY(35%);
  }
}

.animate-hover {
  animation: hover 3s ease-in-out infinite;
}

.section-gallery {
  background-color: var(--color-neutral-200);
  background-image: url("/bg-gallery.jpg");
  /* background-image: linear-gradient(103.23deg, #FEFA5A 0%, #FC6923 74%, #FC4B28 100%); */
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  //overflow: hidden;
}
</style>
