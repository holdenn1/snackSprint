<template>
 <!--  <div class="wrapper">
     <MainMenu />
    <div class="goods-container">
      <Pizza />
    </div> 
  </div> -->
  <AddGoodsForm/>
</template>

<script setup lang="ts">
import MainMenu from "@/components/menu/MainMenu.vue";
import Pizza from "@/components/Goods/Pizza/index.vue";
import AddGoodsForm from "@/components/forms/AddGoodsForm/AddGoodsForm.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 260px auto;
  .goods-container {
    margin: 12px;
  }
}
</style>
