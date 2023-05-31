<template>
  <div class="upload-cover">
    <label :for="name" class="label-cover-product">{{ label }}</label>
    <Field :name="name" v-slot="{ handleChange, handleBlur }">
      <input
        type="file"
        :name="name"
        class="upload-cover__input"
        @change="handleChange"
        @blur="handleBlur"
      />
    </Field>
    <ErrorMessage class="error" :name="name" />
  </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field } from "vee-validate";

const props = defineProps<{
  name: string;
  label: string;
  value: string;
}>();
</script>

<style lang="scss" scoped>
@import "@/styles/variables/_variables.scss";
.upload-cover {
  display: flex;
  align-items: center;
  flex-direction: column;
  .label-cover-product {
    font-size: $fz-title;
    font-weight: $fw-title;
    color: $secondary-color;
    margin-top: 12px;
    text-align: center;
  }
  &__input {
    margin: 12px 0 24px;
    width: 180px;
    color: transparent;
    &::-webkit-file-upload-button {
      cursor: pointer;
      width: 180px;
      height: 32px;
      border: $primary-border;
      background-color: rgb(48, 60, 68);
      color: $primary-color;
      border-radius: $primary-border-radius;
      font-weight: $fw-title;
    }
  }
  .error {
    text-align: center;
    color: red;
    margin-bottom: 6px;
  }
}
</style>
