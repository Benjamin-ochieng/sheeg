<template>
  <ui-filter
    name="filter-invoice"
    :disabled="isActive"
    :filter-options="filterOptions"
    :selected-filter-option="state.queryParams.status"
    @filter-invoice="
      (payload) => dispatch({ type: 'INVOICES::SET_FILTER', payload })
    "
  />
</template>

<script setup>
import { computed } from 'vue';
import store from '../../../store';
import UiFilter from './UiFilter.vue';

const { state, dispatch } = store;
const isActive = computed(() => state.value.selectedInvoices.length > 0);
const filterOptions = ['all', 'draft', 'sent', 'paid', 'late'];
</script>

<style lang="scss" scoped></style>
