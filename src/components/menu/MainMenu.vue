<template>
  <div class="menu">
    <MenuList />
  </div>
</template>

<script setup lang="ts">
import MenuList from "@/components/menu/MenuList/index.vue";
</script>

<style lang="scss" scoped>
@import "@/styles/variables/variables";
.menu {
  width: 260px;
  height: 100%;
  border-right: 1px solid #838383;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 80px;
}
</style>
