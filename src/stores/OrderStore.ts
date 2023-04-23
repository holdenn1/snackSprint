import { useBasketStore } from "@/stores/BasketStore";
import type { Product, Order } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

type CurrentProduct = Product | Order;

export const useOrderStore = defineStore("orderStore", () => {
  const basketStore = useBasketStore();

  const order = ref<{
    isProductModalVisible: boolean;
    currentProduct: CurrentProduct[];
    amountProducts: number;
    sumProducts: number;
    order: Order[];
  }>({
    isProductModalVisible: false,
    currentProduct: [],
    amountProducts: 0,
    sumProducts: 0,
    order: [],
  });

  function setProductModal() {
    order.value.isProductModalVisible = !order.value.isProductModalVisible;
    order.value.amountProducts = 0;
    order.value.sumProducts = 0;
    order.value.currentProduct = [];
  }

  function setCurrentProduct(product: CurrentProduct) {
    const checkProduct = order.value.order.some((pr) => pr.id == product.id);
    if (checkProduct) {
      const currentProduct = order.value.order.find(
        (pr) => pr.id == product.id
      )!;
      order.value.amountProducts = currentProduct.amountProducts;
      order.value.sumProducts = currentProduct.sumProducts;
      order.value.currentProduct = [currentProduct];
    } else {
      order.value.currentProduct = [product];
    }
  }

  function removeCurentProduct() {
    order.value.currentProduct = [];
  }

  function addProduct() {
    order.value.amountProducts += 1;
    order.value.sumProducts += +order.value.currentProduct[0].productPrice;
  }

  function removeProduct() {
    order.value.amountProducts -= 1;
    order.value.sumProducts -= +order.value.currentProduct[0].productPrice;
  }

  function addToBasket() {
    order.value.isProductModalVisible = false;

    const newOrder = order.value.currentProduct.map((pr) => ({
      ...pr,
      amountProducts: order.value.amountProducts,
      sumProducts: order.value.sumProducts,
    }));

    const isOrder = order.value.order.some((pr) => pr.id == newOrder[0].id);

    if (isOrder) {
      order.value.order.map((pr) => {
        if (pr.id == newOrder[0].id) {
          pr.amountProducts = order.value.amountProducts;
          pr.sumProducts = order.value.sumProducts;
        }
        return pr;
      });

      basketStore.orderSum(order.value.order);
    } else {
      order.value.order = [...order.value.order, ...newOrder];
      basketStore.orderSum(order.value.order);
    }

    order.value.currentProduct = [];
    order.value.amountProducts = 0;
    order.value.sumProducts = 0;
  }

  function resetOrder() {
    order.value.order = [];
  }

  return {
    order,
    setProductModal,
    setCurrentProduct,
    removeCurentProduct,
    addProduct,
    removeProduct,
    addToBasket,
    resetOrder
  };
});
