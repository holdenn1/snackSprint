<template>
  <div
    class="toast-container"
    :class="{ 'toast-visible': mainStore.main.success || mainStore.main.error }"
  >
    <div
      class="toast"
      :class="[
        mainStore.main.success && 'toast-succes',
        mainStore.main.error && 'toast-error',
      ]"
    >
      <p class="toast__text">
        {{ mainStore.main.message }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/stores/MainStore";
const mainStore = useMainStore();
</script>

<style lang="scss" scoped>
@import "@/styles/variables/variables";
@import "@/styles/mixins/contentFlexCenter.scss";
.toast-container {
  position: fixed;
  left: 50%;
  top: -100px;
  transform: translateX(-50%);
  transition: 0.5s;
  z-index: 1000;
  .toast {
    min-width: 320px;
    height: 50px;
    border-radius: $primary-border-radius;
    background: rgba(0, 0, 0, 0.9);
    @include contentFlexCenter;
    &__text {
      padding: 0 20px;
    }
  }
  .toast-succes {
    border: 1px solid rgb(26, 167, 26);
    font-size: 20px;
    font-weight: 500;
    color: rgb(26, 167, 26);
  }
  .toast-error {
    border: 1px solid red;
    font-size: 20px;
    font-weight: 500;
    color: red;
  }
}
.toast-visible {
  top: 100px;
  transition: 0.5s;
}
</style>
