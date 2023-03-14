<template>
  <div class="flex p-3.5">
    <fieldset class="w-full font-semibold text-xxs text-slate-900">
      <legend class="text-xs font-semibold text-slate-500 mb-3">SORT BY</legend>
      <base-radio
        name="sort_invoice_list"
        :options="sortOptions"
        @update:model-value="sortInvoiceList"
      />
      <div class="flex items-center justify-center py-8">
        <button
          @click="$emit('invoices-sorted')"
          class="py-3.5 bg-slate-900 text-white text-xs font-bold px-36 rounded-full"
        >
          Close
        </button>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
import store from '../../../store';
import BaseRadio from '../../common/BaseRadio.vue';

const { dispatch } = store;

const emit = defineEmits(['invoices-sorted']);

const sortInvoiceList = (payload) => {
  dispatch({ type: 'INVOICES::SET_SORT', payload });
  setTimeout(() => {
    emit('invoices-sorted');
  }, 500);
};

const sortOptions = [
  { label: 'Amount: Low to High', value: { sort: 'amount', order: 'asc' } },
  { label: 'Amount: High to low', value: { sort: 'amount', order: 'desc' } },
  { label: 'Oldest', value: { sort: 'date', order: 'asc' } },
  { label: 'Newest', value: { sort: 'date', order: 'desc' } },
  { label: 'Alphabetical', value: { sort: 'client', order: 'asc' } },
];
</script>

<style lang="postcss" scoped></style>
