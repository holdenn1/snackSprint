import type { FetchProducts } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrderStore = defineStore("orderStore", () => {
  const order = ref<{
    isProductModalVisible: boolean;
    currentProduct: FetchProducts[];
  }>({
    isProductModalVisible: false,
    currentProduct: [],
  });

  function setProductModal() {
    order.value.isProductModalVisible = !order.value.isProductModalVisible;
  }

  function setCurrentProduct(product: FetchProducts) {
    order.value.currentProduct.push(product);
  }

  function removeCurentProduct(){
    order.value.currentProduct = []
  }
  return {
    order,
    setProductModal,
    setCurrentProduct,
    removeCurentProduct,
  };
});
