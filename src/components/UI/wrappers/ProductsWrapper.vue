<template>
  <div class="products-wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.products-wrapper {
  margin: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 310px);
  grid-auto-rows: 360px;
  justify-items: center;
  justify-content: center;
  align-items: center;
}
</style>
