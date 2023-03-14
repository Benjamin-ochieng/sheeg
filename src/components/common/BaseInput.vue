<template>
  <div>
    <label :for="props.label" class="block mb-2">{{ label }}</label>
    <input
      class="block appearance-none w-full border border-slate-300 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white"
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
  inputType: {
    type: String,
    default: 'text',
  },
  // eslint-disable-next-line vue/require-default-prop
  placeholder: {
    type: String,
    required: false,
  },
  modelValue: {
    type: [Number, String],
    default: '',
  },
});
</script>

<style lang="scss" scoped></style>
