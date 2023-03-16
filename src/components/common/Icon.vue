<template>
  <component
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
    v-bind="$attrs"
    class="text-slate-900"
  />
</template>

<script setup>
import { computed } from 'vue';
import * as icons from 'lucide-vue-next';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: () => '24',
  },
  color: { type: String, default: 'currentColor' },
  strokeWidth: { type: Number, default: 2 },
  defaultClass: { type: String, default: 'lucide-icon' },
});

const icon = computed(() => icons[props.name]);
</script>
