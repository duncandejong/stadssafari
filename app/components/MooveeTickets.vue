<!-- components/MooveeTickets.vue -->
<template>
  <!-- Only required key + optional fallback slot -->
  <div ref="container" class="ticket-container" :class="containerClassMerged" v-bind="dataAttrs">
    <slot name="fallback"><p>Tickets worden geladen…</p></slot>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref, useAttrs} from 'vue'

/* ─────────────── props ─────────────── */
const props = withDefaults(defineProps<{
  mooveeKey: string                // required
  movieTitle?: string
  country?: string
  countries?: string | string[]
  initialCinemas?: number
  loadMoreCinemas?: number
  dataLayerEvents?: boolean        // default: true
  logos?: 'auto' | 'light' | 'dark' | 'none' // default: 'auto'
  classPrefix?: string             // default: 'mv'
  containerClass?: string | string[] | Record<string, boolean>
  tabsShowMonth?: boolean          // default: true
  expanded?: number | 'all'
  /** Welke filtergroepen renderen; 'none' verbergt alle dropdowns. */
  filters?: ReadonlyArray<'day' | 'dayparts' | 'attributes'> | 'none'
}>(), {
  dataLayerEvents: true,
  classPrefix: 'mv',
  tabsShowMonth: true
})

/* ─────────────── refs ─────────────── */
const container = ref<HTMLElement>()
const inited = ref(false)
const attrs = useAttrs()        // ziet alleen attribs die in de template staan

/* ─────────────── helpers ─────────────── */
const kebab = (s: string) => s.replace(/([A-Z])/g, '-$1').toLowerCase()

/* ───── build data‑attributes (only if prop exists in DOM) ───── */
const dataAttrs = computed(() => {
  const a: Record<string, string> = {'data-moovee-key': props.mooveeKey}

  if (props.country) a['data-moovee-country'] = props.country

  if (props.countries) {
    a['data-moovee-countries'] = Array.isArray(props.countries)
        ? props.countries.join(',')
        : props.countries
  }

  if (props.movieTitle) a['data-moovee-title'] = props.movieTitle
  if (props.initialCinemas !== undefined) a['data-moovee-initial'] = String(props.initialCinemas)
  if (props.loadMoreCinemas !== undefined) a['data-moovee-load-more'] = String(props.loadMoreCinemas)

  if ('data-layer-events' in attrs || 'dataLayerEvents' in attrs) {
    a['data-moovee-layer-events'] = String(props.dataLayerEvents)
  }

  if (props.logos) {
    a['data-moovee-logos'] = props.logos
  }

  if (props.classPrefix && (attrs['class-prefix'] || attrs['classPrefix'])) {
    a['data-moovee-prefix'] = props.classPrefix
  }

  if (props.tabsShowMonth !== undefined) {
    a['data-moovee-tabs-show-month'] = String(props.tabsShowMonth)
  }

  if (props.expanded !== undefined) {
    a['data-moovee-expanded'] = typeof props.expanded === 'number'
        ? String(props.expanded)
        : props.expanded
  }

  // Filters: array ('day', 'dayparts', 'attributes') or 'none'
  if (props.filters !== undefined) {
    a['data-moovee-filters'] = typeof props.filters === 'string'
        ? props.filters
        : props.filters.join(',')
  }

  return a
})

/* ─────────────── classes: merge prop + fallthrough ─────────────── */
const containerClassMerged = computed(() => [props.containerClass, attrs.class])

/* ─────────────── MooVee init ─────────────── */
const init = () => {
  if (inited.value || !container.value || !window.MooVee?.init) return

  window.MooVee.init({
    containerElement: container.value,
    mooveeKey: props.mooveeKey,
    movieTitle: props.movieTitle,
    country: props.country,
    countries: props.countries,
    initialCinemas: props.initialCinemas,
    loadMoreCinemas: props.loadMoreCinemas,
    dataLayerEvents: props.dataLayerEvents,
    classPrefix: props.classPrefix,
    ...(props.logos !== undefined && {logos: props.logos}),
    tabsShowMonth: props.tabsShowMonth,
    expanded: props.expanded,
    ...(props.filters !== undefined && {filters: props.filters})
  })

  inited.value = true
}

onMounted(() => {
  if (window.MooVee?.init) init()
  else window.addEventListener('moovee-ready', init, {once: true})
})

onUnmounted(() => {
  window.removeEventListener('moovee-ready', init)
})
</script>

<style lang="css">
.mv_moovee-container.ticket-container {
  /* General */
  --mv-color-primary: var(--btn-primary);
  --mv-color-primary-hover: var(--btn-primary-hover);

  /* Base colors */
  --mv-color-base-950: var(--color-neutral-950);
  --mv-color-base-900: var(--color-neutral-900);
  --mv-color-base-800: var(--color-neutral-800);
  --mv-color-base-700: var(--color-neutral-700);
  --mv-color-base-600: var(--color-neutral-600);
  --mv-color-base-500: var(--color-neutral-500);
  --mv-color-base-400: var(--color-neutral-400);
  --mv-color-base-300: var(--color-neutral-300);
  --mv-color-base-200: var(--color-neutral-200);
  --mv-color-base-100: var(--color-neutral-100);
  --mv-border-radius: 0.25em;
  --mv-border-radius-lg: 0.5em;
  --mv-transition-base: 0.125s;

  /* Fonts */
  --mv-font-family: var(--font-sans);
  --mv-font-weight-normal: 400;
  --mv-font-weight-medium: 600;
  --mv-font-weight-bold: 700;
  --mv-font-size-base: 1em;
  --mv-text-color: inherit;
  --mv-title-font-weight: var(--title-font-weight);
  --mv-title-font-family: var(--font-alt);

  /* Cinemas */
  --mv-cinema-list-spacing: 0.5em;
  --mv-cinema-list-divider-color: transparent;
  --mv-cinema-list-divider-width: 0;
  --mv-cinema-bg-color: #fff;
  --mv-cinema-padding-x: 1em;
  --mv-cinema-padding-y: 0.75em;
  --mv-cinema-border-radius: 0.5em;

  /* Button styling */
  --mv-button-padding: var(--btn-padding-y) var(--btn-padding-x);
  --mv-button-font-family: var(--btn-font-family);
  --mv-button-font-size: 1em;
  --mv-button-font-weight: var(--btn-font-weight);
  --mv-button-border-radius: var(--btn-border-radius);

  /* Primary (Solid) button */
  --mv-button-border-color: var(--btn-primary);
  --mv-button-border-color-hover: var(--btn-primary-hover);
  --mv-button-bg-color: var(--btn-primary);
  --mv-button-bg-color-hover: var(--btn-primary-hover);
  --mv-button-text-color: var(--btn-primary-text);
  --mv-button-text-color-hover: var(--btn-primary-text-hover);

  /* Secondary (Outline) button */
  --mv-button-secondary-border-color: var(--btn-primary);
  --mv-button-secondary-border-color-hover: var(--btn-primary-hover);
  --mv-button-secondary-bg-color: transparent;
  --mv-button-secondary-bg-color-hover: var(--btn-primary-hover);
  --mv-button-secondary-text-color: var(--btn-primary);
  --mv-button-secondary-text-color-hover: var(--btn-primary-text-hover);

  --mv-button-performance-scale: 1;

  --mv-link-color: var(--color-primary-dark);
  --mv-link-color-hover: var(--color-primary-darker);

  /* Tab styling */
  --mv-tab-text-color: var(--mv-color-base-600);
  --mv-tab-text-color-hover: var(--color-primary-dark);
  --mv-tab-active-text-color: var(--mv-color-base-900);
  --mv-tab-active-bg-color: var(--color-neutral-200);
  --mv-tab-padding: .125em .25em;
  --mv-tab-border-radius: 0;
  --mv-tab-border: 0;
  --mv-tab-active-border: 0;
  --mv-tab-navigation-color: var(--mv-color-base-900);
  --mv-tab-navigation-bg: var(--mv-color-base-200);
  --mv-tab-navigation-bg-opacity: 0.7;

  /* Input (filters) */
  --mv-input-bg: #fff;
  --mv-input-border-color: var(--mv-color-base-100);
  --mv-input-border-width: 1px;
  --mv-input-border-radius: var(--mv-border-radius);
  --mv-input-font-weight: var(--mv-font-weight-medium);
  --mv-input-text-color: var(--mv-color-base-900);
  --mv-input-focus-outline-color: var(--mv-color-base-200);
  --mv-input-active-text-color: var(--btn-primary-text);
  --mv-input-active-bg: var(--btn-primary);

  /* Search */
  --mv-search-bg: #fff;
  --mv-search-border-color: var(--mv-color-base-300);
  --mv-search-border-width: 1px;
  --mv-search-border-radius: 9999px;
  --mv-search-font-weight: var(--mv-font-weight-medium);
  --mv-search-text-color: var(--mv-color-base-900);
  --mv-search-focus-outline-color: var(--mv-color-base-300);
  --mv-search-focus-bg: #fff;

  /* Search suggestions */
  --mv-search-suggestions-bg: #fff;
  --mv-search-suggestions-border: var(--mv-color-base-100);
  --mv-search-suggestions-border-radius: var(--mv-border-radius-lg);
  --mv-search-suggestion-text: var(--mv-color-base-900);
  --mv-search-suggestion-select-text: var(--btn-primary-text);
  --mv-search-suggestion-select-bg: var(--btn-primary);

  /* Cinema Card */
  --mv-cinema-card-bg-color: #fff;
  --mv-cinema-card-text-color: #fff;
  --mv-cinema-card-outline-color: var(--mv-color-base-100);
  --mv-cinema-card-shadow: 0;
  --mv-cinema-card-border-radius: var(--mv-border-radius-lg);
}

.mv_dark-theme.mv_moovee-container.ticket-container {

}
</style>