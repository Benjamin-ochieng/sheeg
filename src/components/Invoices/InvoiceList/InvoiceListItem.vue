<template>
  <div
    class="grid grid-cols-2 px-2 py-3.5"
    :class="{ 'bg-slate`-100': isSelected }"
    ref="htmlRefOptions"
    @click="clickInvoice"
  >
    <div>
      <p class="text-lg font-medium">{{ invoice.client }}</p>
      <p class="mt-2 text-xs font-light text-slate`-500">
        Due {{ invoice.due }}
      </p>
    </div>
    <div class="flex flex-col items-end">
      <p class="text-lg font-bold">${{ invoice.amount }}</p>
      <base-pill
        :variant="invoice.status"
        :label="capitalize(invoice.status)"
        class="mt-2"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { onLongPress } from '@vueuse/core';
import BasePill from '../../common/BasePill.vue';
import { capitalize } from '../../../utils';

const props = defineProps({
  invoice: {
    type: Object,
    required: true,
  },
  selectedInvoices: {
    type: Array,
    required: true,
  },
});

const isSelected = computed(() =>
  props.selectedInvoices?.includes(props.invoice.id),
);

const emit = defineEmits([
  'select-invoice',
  'deselect-invoice',
  'open-invoice',
]);

const clickInvoice = () => {
  if (props.selectedInvoices.length > 0) {
    return isSelected.value
      ? emit('deselect-invoice', props.invoice.id)
      : emit('select-invoice', props.invoice.id);
  }
  return emit('open-invoice', props.invoice.id);
};

const htmlRefOptions = ref(null);
const onLongPressCallback = () => {
  emit('select-invoice', props.invoice.id);
};
onLongPress(htmlRefOptions, onLongPressCallback, { delay: 1000 });
</script>

<style lang="postcss" scoped></style>
