<template>
  <div
    class="fixed inset-0 w-full h-screen z-100 overflow-hidden bg-gray-200 opacity-75 flex flex-col items-center justify-center"
  >
    <icon name="Loader" class="animate-spin" size="32" />
    <div class="text-center my-6" v-if="label.length > 1 || tagline.length > 1">
      <h2 class="text-lg font-bold tracking-tight">
        {{ label }}
      </h2>
      <p class="text-sm font-light tracking-tight">
        {{ tagline }}
      </p>
    </div>
  </div>
</template>

<script setup>
import icon from './Icon.vue';

defineProps({
  label: {
    type: String,
    default: '',
  },
  tagline: {
    type: String,
    default: '',
  },
});
</script>

<style lang="postcss" scoped></style>
