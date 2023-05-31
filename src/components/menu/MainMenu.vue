<template>
  <div @click.stop class="menu" :class="{ 'menu-active': main.isShowMenu }">
    <img
      class="menu-arrow"
      @click="setShowMenu(!main.isShowMenu)"
      :src="menuArrow"
      v-if="!main.isShowMenu"
      alt=""
    />
    <MenuList />
  </div>
</template>

<script setup lang="ts">
import MenuList from "@/components/menu/MenuList/ProductsMenuList.vue";
import { useMainStore } from "@/stores/MainStore";
import menuArrow from "@/img/icons/icons8-arrow-left.gif";
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
  @media screen and (max-width: 767px) {
    width: 0;
    padding: 0;
    border: none;
  }
  .menu-arrow {
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 100;
    position: absolute;
    top: 40px;
    left: 30px;
    opacity: 0;
    transition-duration: 0.3s;
    @media screen and (max-width: 767px) {
      opacity: 1;
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
}
</style>
