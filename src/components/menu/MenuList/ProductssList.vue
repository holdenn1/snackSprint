<template>
  <h3 class="title-list">Товари</h3>
  <ul class="main-list">
    <li v-for="product in products" class="main-item" :key="product.id">
      <label :for="product.value">
        <input
          type="checkbox"
          :id="product.value"
          :value="product.value"
          v-model="product.checked"
        />
        {{ product.product }}
      </label>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useAdminStore } from "@/stores/AdminStore";
import { useMainStore } from "@/stores/MainStore";
import type { ProductsListMenu } from "@/types";
import { computed, onMounted, ref, watchEffect } from "vue";

const admineStore = useAdminStore();
const mainStore = useMainStore();

const products = ref<ProductsListMenu[]>([
  { id: 1, value: "pizza", product: "Піца", checked: true },
  { id: 2, value: "burgers", product: "Бургери", checked: false },
  { id: 3, value: "drinks", product: "Напої", checked: false },
]);

const checkedProducts = computed(() => {
  let chechedPdoducts: string[] = [];
  products.value.forEach((product) => {
    if (product.checked) {
      chechedPdoducts.push(product.value);
    }
  });
  return chechedPdoducts;
});

watchEffect(() => {
  mainStore.setCheckedProducts(checkedProducts.value);
});

onMounted(() => { 
  admineStore.fetchProducts();
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
