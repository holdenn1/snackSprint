<template>
  <div
    class="wrapper"
    @click="setShowMenu(false)"
    :class="{ 'menu-active': main.isShowMenu }"
  >
    <img
      class="sroll-up-img"
      :class="{ 'sroll-up-img_active': scrollY > 150 }"
      :src="srollUpImg"
      @click.stop="scrollUp"
      alt=""
    />
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
import srollUpImg from "@/img/icons/icons8-arrow-50.png";
import { useMainStore } from "@/stores/MainStore";
import { storeToRefs } from "pinia";
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const width = ref(window.innerWidth);
const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.pageYOffset;
};

const updateSize = () => {
  width.value = window.innerWidth;
};

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
};

onMounted(() => {
  window.addEventListener("resize", updateSize);
  window.addEventListener("scroll", handleScroll);
  updateSize();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateSize);
  window.removeEventListener("scroll", handleScroll);
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

  .sroll-up-img {
    position: fixed;
    cursor: pointer;
    right: 50px;
    bottom: 60px;
    transform: rotate(270deg);
    opacity: 0;
    transition-duration: 0.2s;
    animation-name: arrowUp;
    animation-duration: 0.8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes arrowUp {
      0% {
        bottom: 20px;
      }
      100% {
        bottom: 50px;
      }
    }
  }

  .sroll-up-img_active {
    opacity: 1;
  }
}
.menu-active {
  display: grid;
  grid-template-columns: auto;
}
</style>
