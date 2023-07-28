<template>
  <div class="product" v-for="product in products" :key="product.id">
    <img class="product__img" :src="product.productCover" alt="" />
    <h3 class="product__title">{{ product.productName }}</h3>
    <div class="product__description">
      <p>{{ product.productDescription }}</p>
    </div>
    <div class="price-and-buy">
      <span class="price-and-buy__price">{{ product.productPrice }} грн.</span>
      <span>{{ product.productWeight }} г</span>
      <button
        v-if="userStore.user.email !== 'caulfieldd17@gmail.com'"
        @click="orderProduct(product)"
        class="price-and-buy__buy"
      >
        Замовити
      </button>
      <button
        v-else
        @click="adminStore.removeProduct(product)"
        class="price-and-buy__buy"
      >
        Видалити
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from "@/stores/AdminStore";
import { useOrderStore } from "@/stores/OrderStore";
import { useUserStore } from "@/stores/UserStore";
import { useToastify } from "vue-toastify-3";
import type { Product } from "@/types";

const orderStore = useOrderStore();
const userStore = useUserStore();
const adminStore = useAdminStore();
const { toastify } = useToastify();

function orderProduct(product: Product) {
  if (userStore.user.email) {
    orderStore.setProductModal();
    orderStore.setCurrentProduct(product);
  } else {
    toastify("warning", "Спочатку авторизуйтесь");
  }
}

const props = defineProps<{
  products: Product[];
}>();
</script>

<style lang="scss" scoped>
@import "@/styles/variables/variables";
@import "@/styles/mixins/contentFlexColumn.scss";

.product {
  max-width: 300px;
  width: 100%;
  height: 340px;
  border: 1px solid #cecece;
  border-radius: $primary-border-radius;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  margin: 12px;
  @include contentFlexColumn;
  cursor: pointer;
  transition-duration: 0.6s;
  &:hover {
    box-shadow: 1px 1px 6px 1px rgba(184, 184, 184, 1);
  }
  &__img {
    width: 200px;
    height: 180px;
    object-fit: cover;
  }
  &__title {
    text-align: center;
    font-size: $fz-title;
    font-weight: $fw-title;
    margin-bottom: 6px;
  }
  &__description {
    overflow: auto;
    height: 60px;
    text-align: center;
    padding: 4px;
    box-sizing: border-box;
    margin-bottom: 6px;
    color: #747474;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .price-and-buy {
    width: 100%;
    height: 26px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 4px;
    &__price {
      font-size: $fz-title;
      font-weight: $fw-title;
    }
    &__buy {
      padding: 4px 8px;
      border-radius: $primary-border-radius;
      border: $primary-border;
      color: black;
      transition-duration: 0.8s;
      cursor: pointer;
      &:hover {
        background: rgb(255, 102, 0);
        color: $primary-color;
      }
    }
  }
}
</style>
