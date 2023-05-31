<template>
  <div
    @click="basketStore.setBasketModal"
    v-show="basketStore.basket.isBasketModalVisible"
    class="basket-modal-wrapper"
  >
    <div @click.stop class="basket-modal">
      <div v-if="orderStore.order.order.length" class="order-list">
        <div
          class="order"
          v-for="order in orderStore.order.order"
          :key="order.id"
        >
          <img :src="order.productCover" class="order__product-photo" />
          <div class="order__product-info">
            <h3 class="order__product-name">{{ order.productName }}</h3>
            <p class="order__product-description">
              {{ order.productDescription }}
            </p>
            <span class="order__product-price">
              {{ order.productPrice }} грн
            </span>
          </div>
          <div class="order__order-info">
            <span class="order__amount-products"
              >Кількість - {{ order.amountProducts }} шт.</span
            >
            <span class="order__price-products"
              >Вартість за {{ order.amountProducts }} шт. -
              {{ order.sumProducts }} грн.</span
            >
          </div>
        </div>
        <div class="order-sum-container">
          <span class="order-dum"
            >Вартість замовлення - {{ basketStore.basket.orderSum }} грн.</span
          >
          <button @click="basketStore.orderConfirm" class="confirm-order-btn">
            Замовлення підтверджую
          </button>
        </div>
      </div>
      <div v-else class="empty-basket">
        <p>Тут поки порожньо, зробіть замовлення!</p>
        <button @click="basketStore.setBasketModal" class="close-basket-btn">
          Закрити
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from "@/stores/OrderStore";
import { useBasketStore } from "@/stores/BasketStore";

const basketStore = useBasketStore();
const orderStore = useOrderStore();
</script>

<style lang="scss" scoped>
@import "@/styles/mixins/contentFlexCenter.scss";
@import "@/styles/mixins/basketBtn.scss";
@import "@/styles/variables/variables";
.basket-modal-wrapper {
  position: fixed;
  background-color: rgb(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  @include contentFlexCenter;

  .basket-modal {
    max-width: 720px;
    width: 100%;
    max-height: 360px;
    height: 100%;
    padding: 20px;
    margin: 20px;
    background-color: white;
    overflow: auto;
    border-radius: $primary-border-radius;
    position: relative;
    &::-webkit-scrollbar {
      display: none;
    }
    .order {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 1fr 100px;
      @media screen and (max-width: 640px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        border-bottom: 1px solid rgb(139, 139, 139);
      }
      &__product-photo {
        width: 180px;
        height: 180px;
        object-fit: cover;
        grid-area: 1 / 1 / 2 / 2;
      }
      &__product-info {
        grid-area: 1 / 2 / 2 / 3;
        @media screen and (max-width: 640px) {
          margin-bottom: 20px;
        }
      }
      &__product-name {
        font-size: $fz-title;
        font-weight: 600;
        margin-bottom: 10px;
      }
      &__product-description {
        font-size: 18px;
        font-weight: 500;
        color: #555555;
        margin-bottom: 16px;
      }
      &__product-price {
        font-size: 22px;
        font-weight: 600;
      }
      &__order-info {
        grid-area: 2 / 1 / 3 / 3;
        display: flex;
        flex-direction: column;
      }
      &__amount-products {
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 6px;
      }
      &__price-products {
        font-size: 22px;
        font-weight: 500;
        padding-bottom: 10px;
        border-bottom: 1px solid rgb(139, 139, 139);
        @media screen and (max-width: 640px) {
          border: none;
        }
      }
    }
    .order-sum-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 520px){
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .order-dum {
        font-size: 22px;
        font-weight: 600;
        @media screen and (max-width: 520px){
          margin-bottom: 20px;
          text-align: center;
        }
      }

      .confirm-order-btn {
        width: 280px;
        height: 50px;
        @include basketBtn;
        @media screen and (max-width: 520px){}
        width: 240px;
        height: 60px;
      }
    }
    .empty-basket {
      height: 100%;
      @include contentFlexCenter;
      flex-direction: column;
      p {
        font-size: 26px;
        font-weight: $fw-title;
        margin-bottom: 20px;
        text-align: center;
      }
      .close-basket-btn {
        @include basketBtn;
        width: 180px;
        height: 40px;
      }
    }
  }
}
</style>
