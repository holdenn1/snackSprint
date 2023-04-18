<template>
  <div>
    <ProductsMenuList />
  </div>
  <AboutCompanyMenuList />
</template>

<script setup lang="ts">
import ProductsMenuList from "@/components/menu/MenuList/ProductsMenuList.vue";
import AboutCompanyMenuList from "@/components/menu/MenuList/AboutCompanyMenuList.vue";
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
