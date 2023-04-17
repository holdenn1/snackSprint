import type { FetchProducts } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("mainStore", () => {
  const main = ref<{
    pizza: FetchProducts[];
    burgers: FetchProducts[];
    drinks: FetchProducts[];
    checkedProducts: string[];
  }>({
    pizza: [],
    burgers: [],
    drinks: [],
    checkedProducts: [],
  });

  function setProducts(products: FetchProducts[]) {
    main.value.pizza = products.filter((pr) => pr.product == "pizza");
    main.value.burgers = products.filter((pr) => pr.product == "burgers");
    main.value.drinks = products.filter((pr) => pr.product == "drinks");
  }

  function setCheckedProducts(products: string[]) {
    main.value.checkedProducts = products;
  }

  return {
    main,
    setProducts,
    setCheckedProducts,
  };
});
