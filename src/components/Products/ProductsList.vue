<template>
  <div class="products-list-wrapper">
    <Product :products="mainStore.main.pizza" />
    <Product
      :products="mainStore.main.burgers"
      v-if="mainStore.main.checkedProducts.includes('burgers')"
    />
    <Product
      :products="mainStore.main.roles"
      v-if="mainStore.main.checkedProducts.includes('roles')"
    />
    <Product
      :products="mainStore.main.salads"
      v-if="mainStore.main.checkedProducts.includes('salads')"
    />
    <Product
      :products="mainStore.main.drinks"
      v-if="mainStore.main.checkedProducts.includes('drinks')"
    />
  </div>
  <div class="without-products" v-if="mainStore.main.error">
    <p>Продукти не знайдено</p>
  </div>
</template>

<script setup lang="ts">
import Product from "@/components/Products/Product.vue";
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore();
</script>

<style lang="scss" scoped>
.products-list-wrapper {
  margin: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 310px) );
  grid-auto-rows: 360px;
  justify-items: center;
  justify-content: center;
  align-items: center;
}
.without-products {
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 32px;
    font-weight: 500;
  }
}
</style>
