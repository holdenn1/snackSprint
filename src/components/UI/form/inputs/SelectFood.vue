<template>
  <div class="select-food">
    <label :for="name" class="label-food">{{ label }}</label>
    <Field class="select-food" :name="name" as="select">
      <option value="" disabled>{{ defaultValue }}</option>
      <option v-for="food in products" :value="food.value" :key="food.id">
        {{ food.food }}
      </option>
    </Field>
    <ErrorMessage class="error" :name="name" />
  </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field } from "vee-validate";

const products = [
  { id: 1, value: "pizza", food: "Піца" },
  { id: 2, value: "burgers", food: "Бургери" },
  { id: 3, value: "drinks", food: "Напої" },
];

const props = defineProps<{
  label: string;
  defaultValue: string;
  name: string;
}>();
</script>

<style lang="scss" scoped>
@import "@/styles/variables/_variables.scss";
.select-food {
  display: flex;
  align-items: center;
  flex-direction: column;
  .label-food {
    font-size: $fz-title;
    font-weight: $fw-title;
    color: $secondary-color;
    margin-top: 12px;
  }
  .select-food {
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
