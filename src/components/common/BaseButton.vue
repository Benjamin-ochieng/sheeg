<template>
  <button
    :type="buttonType"
    class="inline-flex focus:outline-none rounded-full justify-center items-center space-x-2 text-sm font-medium leading-tight"
    :class="classObject"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  buttonType: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value),
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) =>
      ['default', 'desructive', 'secondary', 'ghost', 'link'].includes(value),
  },
  size: {
    type: String,
    default: 'baseSize',
    validator: (value) => ['baseSize', 'sm', 'lg'].includes(value),
  },
});

const classObject = {
  default: props.variant === 'default',
  desructive: props.variant === 'desructive',
  secondary: props.variant === 'secondary',
  ghost: props.variant === 'ghost',
  link: props.variant === 'link',
  baseSize: props.size === 'baseSize',
  sm: props.size === 'sm',
  lg: props.size === 'lg',
};
</script>

<style lang="postcss" scoped>
.default {
  @apply bg-slate-900 text-white hover:bg-slate-700;
}
.desructive {
  @apply bg-red-500 text-white hover:bg-red-600;
}
.secondary {
  @apply bg-transparent border border-slate-400 hover:bg-slate-100;
}
.ghost {
  @apply bg-transparent hover:bg-slate-100;
}
.link {
  @apply bg-transparent underline-offset-4 hover:underline text-slate-900;
}
.baseSize {
  @apply h-10 py-2 px-4;
}
.sm {
  @apply h-9 px-2 rounded-md;
}
.lg {
  @apply h-11 px-8 rounded-md;
}
</style>
