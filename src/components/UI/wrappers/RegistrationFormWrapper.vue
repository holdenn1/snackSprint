<template>
  <div class="wrapper"><slot /></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "@/styles/mixins/contentFlexCenter.scss";
.wrapper {
  width: 100%;
  height: 100%;
  @include contentFlexCenter;
}
</style>
