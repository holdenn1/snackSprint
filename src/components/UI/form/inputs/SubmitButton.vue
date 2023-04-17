<template>
  <button class="submit-btn" type="submit"><slot /></button>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "@/styles/variables/variables";
.submit-btn {
  width: 180px;
  height: 36px;
  margin: auto;
  border: $primary-border;
  background-color: $primary-background;
  border-radius: $primary-border-radius;
  color: $primary-color;
  font-weight: $fw-title;
}
</style>
