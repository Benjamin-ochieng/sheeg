<template>
  <div id="heading" class="px-2 py-4">
    <select-action-bar v-if="state.selectedInvoices.length > 0" />
    <div class="flex justify-between items-center" v-else>
      <h1 class="text-2xl tracking-tight font-bold">Invoices</h1>
      <div class="flex items-center">
        <base-button variant="ghost" size="sm" action="search">
          <icon name="Search" />
        </base-button>
        <base-button variant="ghost" size="sm" action="add">
          <icon name="Plus" />
        </base-button>
      </div>
    </div>
  </div>
  <invoice-filter />
  <base-button
    variant="ghost"
    size="sm"
    action="sortInvoices"
    @sort-invoices="toggleShowInvoiceSort"
    class="mt-4"
  >
    <icon name="ArrowUpDown" size="16" class="mr-1.5" />
    {{ state.queryParams.sortLabel }}
  </base-button>
  <invoice-list :invoices="invoices" />
  <modal-view v-if="showInvoiceSort">
    <invoice-sort @invoices-sorted="toggleShowInvoiceSort" />
  </modal-view>
</template>

<script setup>
import { useFetch } from 'vue-composable';
import { watch, ref } from 'vue';

import { isEqual } from 'lodash';

import store from '../../store';

import Icon from '../common/Icon.vue';
import BaseButton from '../common/BaseButton.vue';
import InvoiceSort from './InvoiceSort/index.vue';
import ModalView from '../common/ModalView.vue';
import InvoiceFilter from './InvoiceFilter/Index.vue';
import InvoiceList from './InvoiceList/Index.vue';
import SelectActionBar from './SelectActionBar/Index.vue';

import { urlBuilder } from '../../utils';

const { state } = store;
const baseUrl = 'http://localhost:3000/invoices';
const { json: invoices, exec } = useFetch();

const showInvoiceSort = ref(false);
const toggleShowInvoiceSort = () => {
  if (showInvoiceSort.value === false) {
    showInvoiceSort.value = true;
  } else {
    showInvoiceSort.value = false;
  }
};
watch(
  state,
  (newVal, oldVal) => {
    if (!isEqual(newVal.queryParams, oldVal?.queryParams)) {
      if (!isEqual(newVal.queryParams, oldVal?.queryParams)) {
        const urlObject = {
          status: newVal.queryParams.status,
          ...newVal.queryParams.sortValue,
        };
        const queryUrl = urlBuilder(urlObject);
        exec(`${baseUrl}?${queryUrl}`);
      } else {
        exec(baseUrl);
      }
    }
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped></style>
