<template>
  <div @click.stop class="menu" :class="{ 'menu-active': main.isShowMenu }">
    <img
      class="menu-arrow"
      :class="{ 'menu-arrow_active': main.isShowMenu }"
      @click="setShowMenu(!main.isShowMenu)"
      :src="menuArrow"
      alt=""
    />
    <MenuList />
  </div>
</template>

<script setup lang="ts">
import MenuList from "@/components/menu/MenuList/ProductsMenuList.vue";
import { useMainStore } from "@/stores/MainStore";
import menuArrow from "@/img/icons/icons8-arrow-50.png";
import { storeToRefs } from "pinia";

const store = useMainStore();

const { main } = storeToRefs(store);
const { setShowMenu } = store;
</script>

<style lang="scss" scoped>
@import "@/styles/variables/variables";
.menu {
  width: 260px;
  height: 100%;
  border-right: 1px solid #838383;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 80px;
  transition-duration: 0.5s;
  z-index: 500;
  @media screen and (max-width: 767px) {
    width: 0;
    padding: 0;
    border: none;
  }
  .menu-arrow {
    cursor: pointer;
    z-index: 100;
    position: absolute;
    top: 40px;
    left: 30px;
    opacity: 0;
    transition-duration: 0.3s;
    transform: rotate(180deg);
    @media screen and (max-width: 767px) {
      opacity: 1;
      transition-delay: 0.2s;
      position: relative;
      z-index: 0;
      animation-name: arrowMenu;
      animation-duration: 0.8s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;

      @keyframes arrowMenu {
        0% {
          left: 20%;
        }
        100% {
          left: 50%;
        }
      }
    }
  }
  .menu-arrow_active {
    opacity: 1;
    transition-duration: 0.3s;
    position: absolute;
    top: 40px;
    left: 30px;
    z-index: 0;

    @media screen and (max-width: 767px) {
      transition-delay: 0s;
      opacity: 0;
    }
  }
}

.menu-active {
  position: absolute;
  width: 260px;
  height: 100%;
  border-right: 1px solid #838383;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(119, 119, 119, 0.7);
  z-index: 500;
}
</style>
