<template>
  <header class="header">
    <RouterLink to="/">
      <h1>SnackSprint</h1>
    </RouterLink>
    <LogInButton />
    <BasketButton v-if="route.path == '/' && store.user.email" />
    <UserMenu />
  </header>
</template>

<script setup lang="ts">
import BasketButton from "@/components/UI/buttons/BasketButton.vue";
import LogInButton from "@/components/UI/buttons/LogInButton.vue";
import UserMenu from "@/components/account/UserMenu/UserMenu.vue";
import { useUserStore } from "@/stores/UserStore";
import { RouterLink, useRoute } from "vue-router";

const store = useUserStore()
const route = useRoute();
</script>

<style lang="scss" scoped>
@import "@/styles/variables/variables";
@import "@/styles/mixins/contentFlexCenter.scss";
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
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
