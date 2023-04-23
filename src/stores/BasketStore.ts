import { useMainStore } from "@/stores/MainStore";
import { useOrderStore } from "@/stores/OrderStore";
import type { Order } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBasketStore = defineStore("basketStore", () => {
  const mainStore = useMainStore();
  const basket = ref<{
    orderSum: number;
    isBasketModalVisible: boolean;
  }>({
    orderSum: 0,
    isBasketModalVisible: false,
  });

  const orderStore = useOrderStore();

  function setBasketModal() {
    basket.value.isBasketModalVisible = !basket.value.isBasketModalVisible;
  }

  function orderSum(order: Order[]) {
    basket.value.orderSum = order.reduce(
      (acum, cur) => acum + cur.sumProducts,
      0
    );
  }

  function orderConfirm() {
    orderStore.resetOrder();
    basket.value.orderSum = 0;
    basket.value.isBasketModalVisible = false;
    mainStore.toastify("success", "Замовлення прийнято!");
  }

  return {
    basket,
    orderSum,
    setBasketModal,
    orderConfirm,
  };
});
