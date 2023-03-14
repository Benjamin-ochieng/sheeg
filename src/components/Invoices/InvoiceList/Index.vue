<template>
  <div id="list-invoices" class="flex flex-col pb-4">
    <div class="divide-y">
      <invoice-list-item
        v-for="(invoice, index) in invoices"
        :key="index"
        :invoice="invoice"
        :selected-invoices="state.selectedInvoices"
        @select-invoice="
          (payload) => dispatch({ type: 'INVOICES::SELECT_INVOICE', payload })
        "
        @deselect-invoice="
          (payload) => dispatch({ type: 'INVOICES::DESELECT_INVOICE', payload })
        "
      />
    </div>
  </div>
</template>

<script setup>
import InvoiceListItem from './InvoiceListItem.vue';
import store from '../../../store';

defineProps({
  invoices: {
    type: Array,
    default: () => [],
  },
});

const { state, dispatch } = store;
</script>

<style lang="scss" scoped></style>
