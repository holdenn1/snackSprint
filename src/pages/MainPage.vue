<template>
  <div class="wrapper">
    <MainMenu />
    <ProductsWrapper v-if="mainStore.main.checkedProducts.length">
      <Products
        :products="mainStore.main.pizza"
        v-if="mainStore.main.checkedProducts.includes('pizza')"
      />
      <Products
        :products="mainStore.main.burgers"
        v-if="mainStore.main.checkedProducts.includes('burgers')"
      />
      <Products
        :products="mainStore.main.drinks"
        v-if="mainStore.main.checkedProducts.includes('drinks')"
      />
    </ProductsWrapper>
    <div class="without-products" v-if="!mainStore.main.checkedProducts.length">
      <p>Продукти не обрано</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainMenu from "@/components/menu/MainMenu.vue";
import Products from "@/components/Products/Products.vue";
import ProductsWrapper from "@/components/UI/wrappers/ProductsWrapper.vue";
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore();
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 260px auto;
  .without-products{
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      font-size: 32px;
      font-weight: 500;
    }
  }
}
</style>
