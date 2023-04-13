<template>
  <header class="header">
    <RouterLink to="/">
      <h1>SnakeSprint</h1>
    </RouterLink>
    <LogInButton />
    <UserMenu />
  </header>
</template>

<script setup lang="ts">
import LogInButton from "@/components/UI/buttons/LogInButton.vue";
import UserMenu from "@/components/account/UserMenu/UserMenu.vue";
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@import "@/styles/variables/variables";
@import "@/styles/mixins/contentFlexCenter.scss";
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
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
