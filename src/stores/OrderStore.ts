import type { Product, ProductInBasket } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

type CurrentProduct = Product | ProductInBasket;

export const useOrderStore = defineStore("orderStore", () => {
  const order = ref<{
    isProductModalVisible: boolean;
    currentProduct: CurrentProduct[];
    amountProducts: number;
    sumProducts: number;
    sumAllAmountProducts: number;
    sumAllOrder: number;
    order: ProductInBasket[];
  }>({
    isProductModalVisible: false,
    currentProduct: [],
    amountProducts: 0,
    sumProducts: 0,
    sumAllAmountProducts: 0,
    sumAllOrder: 0,
    order: [],
  });

  function setProductModal() {
    order.value.isProductModalVisible = !order.value.isProductModalVisible;
    order.value.amountProducts = 0;
    order.value.sumProducts = 0;
    order.value.sumAllAmountProducts = 0;
    order.value.sumAllOrder = 0;
  }

  function setCurrentProduct(product: CurrentProduct) {
    let checkProduct = order.value.order.some((pr) => pr.id == product.id);
    if (checkProduct) {
      const currentProduct = order.value.order.find(
        (pr) => pr.id == product.id
      )!;
      order.value.amountProducts = currentProduct.amountProducts;
      order.value.sumAllAmountProducts = currentProduct.sumAllAmountProducts;
      order.value.sumAllOrder = currentProduct.sumAllOrder;
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
    order.value.sumAllAmountProducts = order.value.sumProducts;
    order.value.sumAllOrder = order.value.sumProducts;

    const newOrder = {
      id: order.value.currentProduct[0].id,
      product: order.value.currentProduct[0].product,
      productCover: order.value.currentProduct[0].productCover,
      productDescription: order.value.currentProduct[0].productDescription,
      productName: order.value.currentProduct[0].productName,
      productPrice: order.value.currentProduct[0].productPrice,
      productWeight: order.value.currentProduct[0].productWeight,
      amountProducts: order.value.amountProducts,
      sumProducts: order.value.sumProducts,
      sumAllAmountProducts: order.value.sumAllAmountProducts,
      sumAllOrder: order.value.sumAllOrder,
    };

    let isOrder = order.value.order.some((pr) => pr.id == newOrder.id);

    if (isOrder) {
      order.value.order.map((pr) => {
        if (pr.id == newOrder.id) {
          pr.amountProducts = order.value.amountProducts;
          pr.sumProducts = order.value.sumProducts;
          pr.sumAllAmountProducts = order.value.sumAllAmountProducts;
          pr.sumAllOrder = order.value.sumAllOrder;
        }
        return pr;
      });
    } else {
      order.value.order = [...order.value.order, newOrder];
    }

    order.value.currentProduct = [];
    order.value.amountProducts = 0;
    order.value.sumAllAmountProducts = 0;
    order.value.sumAllOrder = 0;
    order.value.sumProducts = 0;
  }

  return {
    order,
    setProductModal,
    setCurrentProduct,
    removeCurentProduct,
    addProduct,
    removeProduct,
    addToBasket,
  };
});
