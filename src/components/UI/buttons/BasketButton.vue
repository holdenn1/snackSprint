<template>
  <img
    @click="basketStore.setBasketModal"
    class="basket"
    :src="basket"
    alt=""
  />
</template>

<script setup lang="ts">
import basket from "@/img/icons/icons8-shopping-basket-big60.png";
import { useBasketStore } from "@/stores/BasketStore";


const basketStore = useBasketStore();
</script>

<style scoped>
.basket {
  cursor: pointer;
  position: fixed;
  right: 90px;
  top: 14px;
}
</style>
