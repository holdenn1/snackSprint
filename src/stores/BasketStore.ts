import type { ProductInBasket } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBasketStore = defineStore("basketStore", () => {
  const basket = ref<{
    productsInBasket: ProductInBasket[]
  }>();
});
