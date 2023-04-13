<template>
  <div>
    <h3>Main</h3>
    <RouterLink to="sign-up">sign-up</RouterLink>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useUserStore } from "@/stores/UserStore";

const userStore = useUserStore();

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      userStore.removeUser();
    })
    .catch((e) => {
      console.error(e);
    });
};
</script>

<style scoped></style>
