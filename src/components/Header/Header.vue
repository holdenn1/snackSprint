<template>
  <header class="header">
    <RouterLink to="/">
      <h1>SnakeSprint</h1>
    </RouterLink>
  </header>
</template>

<script setup lang="ts">
import type { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@import "@/styles/variables/variables";
@import "@/styles/mixins/contentFlexCenter.scss";
.header {
  width: 100%;
  height: 80px;
  @include contentFlexCenter;
  background-color: $primary-background;
  h1 {
    font-size: 28px;
    font-weight: $fw-title;
    color: $primary-color;
  }
}
</style>
