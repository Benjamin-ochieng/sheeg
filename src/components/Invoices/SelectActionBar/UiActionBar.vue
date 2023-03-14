<template>
  <div class="flex justify-between items-center">
    <div class="flex space-x-3">
      <base-button
        button-type="icon"
        action="go-back"
        icon="arrow-back"
        @click="$emit('cancelSelection')"
      />
      <h1 class="text-2xl tracking-tight font-bold">
        <span class="mr-2"> {{ selectedCount }} </span>Selected
      </h1>
    </div>
    <div class="flex space-x-2 items-center">
      <base-button
        v-if="selectedCount === 1"
        button-type="icon"
        action="open-view"
        icon="duplicate"
      />
      <base-button
        v-if="selectedCount === 1"
        button-type="icon"
        action="clone"
        icon="push-pin"
      />
      <base-button button-type="icon" action="delete" icon="trash" />
    </div>
  </div>
</template>

<script setup>
import BaseButton from '../../common/BaseButton.vue';

defineEmits(['cancelSelection']);

defineProps({
  selectedCount: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
