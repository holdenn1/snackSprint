<template>
  <div
    class="product-modal-wrapper"
    v-show="orderStore.order.isProductModalVisible"
    @click="orderStore.setProductModal"
  >
    <div @click.stop class="product-modal">
      <div class="product" v-for="product in orderStore.order.currentProduct">
        <img :src="product.productCover" class="product__photo" />
        <div class="product__info">
          <h3 class="product__title">{{ product.productName }}</h3>
          <span class="product__price">{{ product.productPrice }} грн</span>
        </div>
      </div>
      <div class="product__amount">
        <div class="ctrl-amount">
          <button
            :disabled="!orderStore.order.amountProducts"
            @click="orderStore.removeProduct"
            class="amount-btn"
          >
            Думаю досить
          </button>
          <span class="amount"
            >{{ orderStore.order.amountProducts }} кіл-ть</span
          >
          <button @click="orderStore.addProduct" class="amount-btn">
            Хочу ще
          </button>
        </div>
        <span class="amount-all">
          Вартість замовлення - {{ orderStore.order.sumProducts }} грн
        </span>
      </div>
      <button @click="closeOrder" class="basket">
        <span>Додати в кошик</span>
        <img class="basket-img" :src="basket" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from "@/stores/OrderStore";
import basket from "@/img/icons/icons8-shopping-basket-smal30.png";

const orderStore = useOrderStore();

function closeOrder() {
  if (orderStore.order.sumProducts) {
    orderStore.addToBasket();
  }
  return;
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins/contentFlexCenter.scss";
@import "@/styles/variables/variables";
.product-modal-wrapper {
  position: fixed;
  background-color: rgb(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
  margin-top: 60px;
  @include contentFlexCenter;
  .product-modal {
    max-width: 720px;
    width: 100%;
    max-height: 380px;
    min-height: 360px;
    padding: 20px;
    margin: 20px;
    background-color: white;
    overflow: hidden;
    border-radius: $primary-border-radius;
    position: relative;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: #ffffff;
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #3b3b3b;
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #636363;
    }
    @media screen and (max-width: 374px) {
      padding: 16px;
    }
    .product {
      display: grid;
      grid-template-columns: 190px minmax(80px, 260px);
      margin-bottom: 30px;
      @media screen and (max-width: 540px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &__photo {
        width: 160px;
        height: 160px;
        margin-right: 20px;
        object-fit: cover;
        @media screen and (max-width: 440px) {
          margin-right: 8px;
          max-width: 140px;
          min-width: 120px;
          width: 100%;
          height: 140px;
        }
      }
      &__info {
        margin: 0 10px;
        text-align: center;
      }
      &__title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 12px;
      }
      &__price {
        font-size: 20px;
        font-size: $fw-title;
      }
      &__amount {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .ctrl-amount {
          max-width: 500px;
          width: 100%;
          margin-bottom: 30px;
          display: flex;
          justify-content: space-around;
          @media screen and (max-width: 520px) {
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
          }
          .amount-btn {
            width: 190px;
            height: 40px;
            border: $primary-border;
            border-radius: $primary-border-radius;
            background-color: $primary-background;
            color: $primary-color;
            font-weight: $fw-title;
          }
          .amount {
            font-size: $fz-title;
            font-weight: $fw-title;
            text-align: center;
            margin: 0 10px;
          }
        }
        .amount-all {
          font-size: $fz-title;
          font-weight: $fw-title;
        }
      }
    }
    .basket {
      background-color: $primary-background;
      color: $primary-color;
      width: 180px;
      padding: 10px;
      border-radius: $primary-border-radius;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px 0 0 auto;
      span {
        font-weight: $fw-title;
      }
    }
  }
}
</style>
