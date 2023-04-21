<template>
  <div class="wrapper">
    <MainMenu />
    <ProductsList />
    <ProductModal />
    <BasketModal />
  </div>
</template>

<script setup lang="ts">
import ProductModal from "@/components/modalWindows/ProductModal.vue";
import ProductsList from "@/components/Products/ProductsList.vue";
import MainMenu from "@/components/menu/MainMenu.vue";
import BasketModal from "@/components/modalWindows/BasketModal.vue";

</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 260px auto;
}
</style>
