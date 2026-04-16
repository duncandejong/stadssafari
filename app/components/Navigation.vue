<template>
  <nav class="nav-main">
    <ul>
      <li
          v-for="(menuItem, index) in state.menuItems"
          :key="index"
          :class="{ active: isActive(menuItem) }"
      >
        <NuxtLink :to="menuItem.link">{{ menuItem.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
// props definitions
const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
  useScrollSpy: {
    type: Boolean,
    default: false,
  },
  scrollSpyOffset: {
    type: Number,
    default: 0,
  },
});

// ScrollSpy
const {state, addMenuItem} = useScrollSpy(props.scrollSpyOffset);

// Add menu items
props.menuItems?.forEach((menuItem: any) => {
  addMenuItem(menuItem);
});

// methods
const isActive = (menuItem: any) => {
  return props.useScrollSpy ? state.activeMenuItem === menuItem : false;
};
</script>

<style lang="css">
.nav-main {
  position: sticky; /* sticky */
  top: 0; /* top-0 */
  background-color: var(--color-neutral-900); /* approx bg-base-700 */
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
  z-index: 10; /* z-10 */
  overflow-x: auto; /* overflow-x-auto */
  width: 100%; /* w-full */
  max-width: 100%; /* max-w-full */
  display: flex; /* flex */
  justify-content: center; /* justify-center */
  align-items: center; /* items-center */
  /* height: var(--nav-height, 60px); */
}

.nav-main ul {
  display: flex; /* flex */
  flex-direction: row; /* flex-row */
  flex-wrap: nowrap; /* flex-nowrap */
  white-space: nowrap; /* whitespace-nowrap */
  justify-content: center; /* justify-center */
  align-items: center; /* items-center */
  color: var(--color-secondary-light); /* text-secondary-light */
  gap: 1rem; /* gap-4 */
  font-size: 1.125rem; /* text-lg */
}

@media (min-width: 768px) {
  /* md */
  .nav-main ul {
    gap: 1.5rem; /* md:gap-6 */
    font-size: 1.25rem; /* md:text-xl */
  }
}

@media (min-width: 1024px) {
  /* lg */
  .nav-main ul {
    font-size: 1.5rem; /* lg:text-2xl */
  }
}

.nav-main ul li {
  display: inline-flex; /* inline-flex */
  flex-shrink: 0; /* shrink-0 */
}

.nav-main ul li a {
  padding-top: 0.5rem; /* py-2 */
  padding-bottom: 0.5rem; /* py-2 */
  text-transform: uppercase; /* uppercase */
  font-weight: 600; /* font-semibold */
  letter-spacing: 0.05em; /* tracking-wider */
}

@media (min-width: 1024px) {
  /* lg */
  .nav-main ul li a {
    padding-top: 0.75rem; /* lg:py-3 */
    padding-bottom: 0.75rem; /* lg:py-3 */
  }
}

.nav-main ul li a:hover {
  opacity: 1; /* hover:opacity-100 */
  text-decoration: underline; /* hover:underline */
}

.nav-main ul li.active a {
  text-decoration: underline; /* underline */
  color: var(--color-white); /* text-white */
}
</style>

<!-- USAGE
<Navigation
      :menuItems="[
        { link: '#synopsis', label: 'Synopsis' },
        { link: '#videos', label: 'Videos' },
        { link: '#about', label: 'About' },
        { link: '#contact', label: 'Contact' },
      ]"
      :useScrollSpy="true"
      :scrollSpyOffset="100"
    />
-->
