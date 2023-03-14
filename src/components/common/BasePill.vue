<template>
  <button
    class="flex justify-center items-center px-4 rounded-3xl"
    :class="`${computedStyle}`"
  >
    <p class="text-xs leading-4">{{ label }}</p>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    required: true,
    validator: (value) =>
      ['base', 'dark', 'paid', 'sent', 'draft', 'late'].includes(value),
  },
  label: {
    type: String,
    required: true,
  },
});

const computedStyle = computed(() => {
  let result = '';
  switch (props.variant) {
    case 'base':
      result = 'text-slate-900  border-slate-900';
      break;

    case 'dark':
      result = 'text-white  border-white';
      break;

    case 'paid':
      result = 'text-green-800  bg-green-100';
      break;

    case 'sent':
      result = 'text-indigo-800 bg-indigo-100';
      break;

    case 'draft':
      result = 'text-amber-800  bg-amber-100';
      break;

    case 'late':
      result = 'text-rose-800  bg-rose-100';
      break;

    default:
      result = 'bg-white border-slate-900';
      break;
  }
  return result;
});
</script>

<style lang="scss" scoped></style>
