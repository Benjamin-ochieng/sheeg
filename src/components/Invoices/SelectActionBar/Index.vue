<template>
  <ui-action-bar
    :selected-count="state.selectedInvoices.length"
    @cancel-selection="dispatch({ type: 'INVOICES::DESELECT_ALL_INVOICES' })"
  />
</template>

<script setup>
import UiActionBar from './UiActionBar.vue';
import store from '../../../store';

const { state, dispatch } = store;
</script>

<style lang="scss" scoped></style>
