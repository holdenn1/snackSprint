<template>
  <Header />
  <Toast />
  <Main>
    <RouterView />
  </Main>
  <Footer />
</template>

<script lang="ts" setup>
import Footer from "@/components/Footer/Footer.vue";
import Header from "@/components/Header/Header.vue";
import Main from "@/components/Main/Main.vue";
import Toast from "@/components/UI/Toast/Toast.vue";
</script>

<style lang="scss" scoped></style>
