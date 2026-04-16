<template>
  <component
      :is="componentTag"
      v-bind="rootAttrs"
      class="btn"
      :class="[
      `btn-${variant}`,
      color && `btn-${color}`,
      size && `btn-${size}`,
      { disabled, 'btn--no-link': noLink }
    ]"
      @click="onClick"
  >
    <Icon v-if="icon && iconPosition === 'left'" :name="icon" class="pointer-events-none"/>
    <slot/>
    <span v-if="btnText">{{ btnText }}</span>
    <Icon v-if="icon && iconPosition !== 'left'" :name="icon" class="pointer-events-none"/>
  </component>
</template>

<script setup>
import {computed, resolveComponent} from 'vue'

const props = defineProps({
  btnText: {type: String, required: false, default: null},
  variant: {
    type: String,
    default: 'solid',
    validator: v => ['solid', 'ghost', 'outline'].includes(v),
  },
  color: {
    type: String,
    default: null,
    validator: v => ['primary', 'secondary', 'tertiary', 'danger', 'white'].includes(v),
  },
  size: {
    type: String,
    default: null,
    validator: v => ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(v),
  },
  href: {type: String, default: null},
  to: {type: [String, Object], default: null},
  icon: {type: String, default: null},
  iconPosition: {type: String, default: 'right'},
  disabled: {type: Boolean, default: false},
  noLink: {type: Boolean, default: false},
})

const emit = defineEmits(['click'])

const NuxtLink = resolveComponent('NuxtLink')

const componentTag = computed(() => {
  if (props.to) return NuxtLink
  if (props.href) return 'a'
  return 'button'
})

/**
 * Alleen de relevante attrs aan de juiste tag hangen.
 * - NuxtLink: to, target, rel
 * - a: href, target, rel
 * - button: type, disabled
 */
const rootAttrs = computed(() => {
  // attrs uit parent (zoals target, rel, type) automatisch meenemen
  // met een paar expliciete props zodat het altijd goed zit.
  const common = {
    'aria-disabled': props.disabled || undefined,
    tabindex: props.disabled ? -1 : undefined,
  }

  if (props.to) {
    return {
      ...common,
      to: props.to,
    }
  }

  if (props.href) {
    return {
      ...common,
      href: props.href,
    }
  }

  return {
    ...common,
    type: 'button',
    disabled: props.disabled,
  }
})

function onClick(e) {
  if (props.disabled) {
    e.preventDefault()
    e.stopPropagation()
    return
  }
  // Laat de click door voor GTM of andere listeners
  emit('click', e)
}
</script>