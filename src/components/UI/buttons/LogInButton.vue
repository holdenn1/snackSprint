<template>
  <RouterLink
    class="logIn-btn"
    :class="{ isAuth: !userStore.user.email }"
    to="/sign-in"
  >
    <img :src="logIn" alt="" />
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import logIn from "@/img/icons/icons8-log-in-64.png";
import { useUserStore } from "@/stores/UserStore";
const userStore = useUserStore();
</script>

<style lang="scss" scoped>
.logIn-btn {
  display: none;
  position: fixed;
  right: 20px;
}
.isAuth {
  display: block;
  cursor: pointer;
}
</style>
