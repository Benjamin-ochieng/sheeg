<template>
  <div>
    <label
      :for="props.label"
      class="block mb-2"
      :class="{
        'text-slate-900': variant === 'default',
        'text-red-500': variant === 'desructive',
        'text-slate-400': variant === 'ghost',
      }"
      >{{ label }}</label
    >
    <input
      class="block appearance-none w-full border rounded-full py-3 px-4 leading-tight focus:outline-none"
      :class="{
        'border-red-500': variant === 'desructive',
        'border-slate-400': variant === 'default',
        'border-slate-300': variant === 'ghost',
      }"
      :name="props.label"
      :id="props.label"
      :type="props.inputType"
      :placeholder="props.placeholder"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineEmits(['update:modelValue']);

const props = defineProps({
  label: {
    type: String,
    default: 'Input',
  },
  variant: {
    type: String,
    default: 'default',
    validation: (value) => ['default', 'desructive', 'ghost'].includes(value),
  },
  inputType: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [Number, String],
    default: '',
  },
});
</script>

<style lang="postcss" scoped></style>
