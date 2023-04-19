import type { Product } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";
import { realTimeDb } from "@/firebase";
import { ref as refDatabase, onValue } from "firebase/database";

export const useMainStore = defineStore("mainStore", () => {
  const main = ref<{
    pizza: Product[];
    burgers: Product[];
    roles: Product[];
    salads: Product[];
    drinks: Product[];
    checkedProducts: string[];
    error: boolean;
   
  }>({
    pizza: [],
    burgers: [],
    roles: [],
    salads: [],
    drinks: [],
    checkedProducts: [],
    error: false,
    
  });

  async function fetchProducts() {
    try {
      main.value.error = false;
      const userChatRef = refDatabase(realTimeDb, `products/`);
      onValue(userChatRef, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setProducts(Object.values(data));
        }
      });
    } catch (e) {
      main.value.error = true;
      console.error(e);
    }
  }

  function setProducts(products: Product[]) {
    main.value.pizza = products.filter((pr) => pr.product == "pizza");
    main.value.burgers = products.filter((pr) => pr.product == "burgers");
    main.value.roles = products.filter((pr) => pr.product == "roles");
    main.value.salads = products.filter((pr) => pr.product == "salads");
    main.value.drinks = products.filter((pr) => pr.product == "drinks");
  }

  function setCheckedProducts(products: string[]) {
    main.value.checkedProducts = products;
  }

 
  return {
    main,
    setProducts,
    setCheckedProducts,
    fetchProducts,
  };
});
