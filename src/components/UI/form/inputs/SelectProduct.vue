<template>
  <div class="select-product">
    <label :for="name" class="label-product">{{ label }}</label>
    <Field class="select-product" :name="name" as="select">
      <option value="" disabled>{{ defaultValue }}</option>
      <option
        v-for="product in products"
        :value="product.value"
        :key="product.id"
      >
        {{ product.product }}
      </option>
    </Field>
    <ErrorMessage class="error" :name="name" />
  </div>
</template>

<script setup lang="ts">
import type { IProductSelectList } from "@/types";
import { ErrorMessage, Field } from "vee-validate";
import { ref } from "vue";

const products = ref<IProductSelectList[]>([
  { id: 1, value: "pizza", product: "Піца" },
  { id: 2, value: "burgers", product: "Бургери" },
  { id: 3, value: "roles", product: "Роли" },
  { id: 4, value: "salads", product: "Салати" },
  { id: 5, value: "drinks", product: "Напої" },
]);

const props = defineProps<{
  label: string;
  defaultValue: string;
  name: string;
}>();
</script>

<style lang="scss" scoped>
@import "@/styles/variables/_variables.scss";
.select-product {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 20px; 
  .label-product {
    font-size: $fz-title;
    font-weight: $fw-title;
    color: $secondary-color;
    margin-top: 12px;
  }
  .select-product {
    width: 100%;
    height: 32px;
    border: $primary-border;
    margin: 12px 0;
    padding: 5px;
    box-sizing: border-box;
  }
  .error {
    text-align: center;
    color: red;
    margin-bottom: 6px;
  }
}
</style>
