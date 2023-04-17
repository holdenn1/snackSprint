<template>
  <div>
    <ProductsList />
    <DeliveryList />
  </div>
  <AboutCompanyList />
</template>

<script setup lang="ts">
import ProductsList from "@/components/menu/MenuList/ProductssList.vue";
import DeliveryList from "@/components/menu/MenuList/DeliveryList.vue";
import AboutCompanyList from "@/components/menu/MenuList/AboutCompanyList.vue";
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
