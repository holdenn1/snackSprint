import type { Order } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBasketStore = defineStore("basketStore", () => {
  const basket = ref<{
    orderSum: number;
    isBasketModalVisible: boolean;
  }>({
    orderSum: 0,
    isBasketModalVisible: false,
  });

  function setBasketModal() {
    basket.value.isBasketModalVisible = !basket.value.isBasketModalVisible
  }

  function orderSum(order: Order[]) {
    basket.value.orderSum = order.reduce(
      (acum, cur) => acum + cur.sumProducts,
      0
    );
  }

  return {
    basket,
    orderSum,
    setBasketModal
  };
});
