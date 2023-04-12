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

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      console.log("Signed out successfully");
    })
    .catch((e) => {
      console.error(e);
    });
};
</script>

<style scoped></style>
