<template>
  <div class="pizza-list">
    <PizzaItem />
  </div>
</template>

<script setup lang="ts">
import PizzaItem from "@/components/Goods/Pizza/PizzaItem.vue";
</script>

<style lang="scss" scoped>
.pizza-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 310px);
  grid-auto-rows: 360px;
  justify-items: center;
  justify-content: center;
  align-items: center;
}
</style>
