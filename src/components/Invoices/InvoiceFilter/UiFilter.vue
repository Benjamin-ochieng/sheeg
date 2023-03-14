<template>
  <div id="filter" class="px-3.5 flex justify-start flex-wrap">
    <label
      data-testId="filter-option"
      v-for="(filter, index) in filterOptions"
      :for="filter"
      :key="index"
      class="cursor-pointer relative m-1"
    >
      <input
        :disabled="disabled"
        type="radio"
        :name="name"
        :id="filter"
        class="absolute opacity-0 inset-0"
        :value="filter"
        :checked="selectedFilterOption === filter"
        @change="$emit('filterInvoice', filter)"
      />
      <span>{{ filter }}</span>
    </label>
  </div>
</template>

<script setup>
defineEmits(['filterInvoice']);

defineProps({
  name: {
    type: String,
    required: true,
  },

  disabled: { type: Boolean, default: false },

  filterOptions: {
    type: Array,
    required: true,
  },
  selectedFilterOption: {
    type: String,
    default: '',
  },
});
</script>

<style lang="postcss" scoped>
input[type='radio'] + span {
  @apply flex justify-center items-center px-5 py-1 border-2 rounded-3xl text-xs leading-4 text-slate-900  border-slate-900;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
}
input[type='radio']:checked + span,
input[type='radio']:focus + span {
  @apply bg-slate-900 text-white;
}
input[type='radio']:disabled + span {
  @apply border-slate-300 text-slate-300;
}
</style>
