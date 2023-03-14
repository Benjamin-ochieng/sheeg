<template>
  <label
    v-for="(option, index) in options"
    :key="index"
    :for="option.label"
    class="block relative cursor-pointer text-sm mb-5"
  >
    {{ upperFirstLabel(option.label) }}
    <input
      :name="name"
      :value="option.value"
      :checked="modelValue === option.value"
      @change="$emit('update:modelValue', option)"
      type="radio"
      :id="option.label"
      class="absolute w-5 h-5 opacity-0"
      v-bind="$attrs"
    />
    <span
      class="radio w-5 h-5 absolute top-0 right-0 cursor-pointer border-2 border-slate-900 rounded-full"
    ></span>
  </label>
</template>

<script setup>
import { capitalize } from '../../utils';

defineEmits(['update:modelValue']);

defineProps({
  name: {
    type: String,
    required: true,
  },
  checkedRadio: { type: Boolean, default: false },
  options: {
    type: Array,
    default: () => [
      { label: 'Option A', value: 'A' },
      { label: 'Option B', value: 'B' },
    ],
  },
  modelValue: {
    type: [Number, String],
    default: '',
  },
});

const upperFirstLabel = (value) => capitalize(value);
</script>

<style lang="scss" scoped></style>
