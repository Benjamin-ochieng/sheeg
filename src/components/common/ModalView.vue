<template>
  <div id="modal" class="w-full h-full fixed top-0 left-0 z-10">
    <div id="overlay" class="w-full h-full relative top-0 left-0 pin">
      <div
        id="modal-card"
        class="w-full absolute inset-x-0 bottom-0 bg-white rounded-t-lg overflow-y-scroll"
      >
        <slot>
          <div
            id="content"
            class="w-full h-full flex justify-center items-center"
          >
            <p class="font-bold">Modal Content</p>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.pin {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
