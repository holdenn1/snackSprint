<template>
  <div
    class="wrapper"
    @click="setShowMenu(false)"
    :class="{ 'menu-active': main.isShowMenu }"
  >
    <MainMenu />
    <ProductsList />
    <ProductModal />
    <BasketModal />
  </div>
</template>

<script setup lang="ts">
import ProductModal from "@/components/modalWindows/ProductModal.vue";
import ProductsList from "@/components/Products/ProductsList.vue";
import MainMenu from "@/components/menu/MainMenu.vue";
import BasketModal from "@/components/modalWindows/BasketModal.vue";
import { useMainStore } from "@/stores/MainStore";
import { storeToRefs } from "pinia";
import { ref, onMounted, onBeforeUnmount, watchEffect, watch } from "vue";

const width = ref(window.innerWidth);

const updateSize = () => {
  width.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateSize);
  updateSize();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateSize);
});

watch(width, () => {
  if (width.value > 767) {
    setShowMenu(false);
  }
});

const store = useMainStore();

const { main } = storeToRefs(store);
const { setShowMenu } = store;
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
  grid-template-columns: 260px auto;
  @media screen and (max-width: 767px) {
    grid-template-columns: 0 auto;
  }
}
.menu-active {
  display: grid;
  grid-template-columns: auto;
}
</style>
