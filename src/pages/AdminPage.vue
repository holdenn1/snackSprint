<template>
  <AddProductsForm />
</template>

<script setup lang="ts">
import AddProductsForm from "@/components/forms/AddProductsForm/AddProductsForm.vue";
import router from "@/router";
import { useUserStore } from "@/stores/UserStore";
import { onMounted } from "vue";

const userStore = useUserStore();

onMounted(() => {
  if (userStore.user.email !== "caulfieldd17@gmail.com") {
    router.push("/");
  }
});
</script>

<style scoped></style>
