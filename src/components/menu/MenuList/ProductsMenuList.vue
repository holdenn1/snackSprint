<template>
  <div>
    <h3 class="title-list" :class="{ 'active-title-list': main.isShowMenu }">
      Товари
    </h3>
    <ul class="main-list" :class="{ 'active-main-list': main.isShowMenu }">
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
  </div>
  <ul class="list" :class="{ 'active-list': main.isShowMenu }">
    <li class="item"><span>Про нас</span></li>
    <li class="item"><span>Робота</span></li>
  </ul>
</template>

<script setup lang="ts">
import { useMainStore } from "@/stores/MainStore";
import type { ProductsListMenu } from "@/types";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref, watchEffect } from "vue";


const store = useMainStore();

const { main } = storeToRefs(store);
const { fetchProducts, setCheckedProducts } = store;

const products = ref<ProductsListMenu[]>([
  { id: 1, value: "burgers", product: "Бургери", checked: false },
  { id: 2, value: "roles", product: "Роли", checked: false },
  { id: 3, value: "salads", product: "Салати", checked: false },
  { id: 4, value: "drinks", product: "Напої", checked: false },
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
  setCheckedProducts(checkedProducts.value);
});

onMounted(() => {
  fetchProducts();
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
