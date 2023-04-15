<template>
  <div class="upload-cover">
    <label :for="name" class="label-cover-food">{{ label }}</label>
    <Field :name="name" v-slot="{ handleChange, handleBlur }">
      <input
        class="upload-cover__input"
        type="file"
        :value="value"
        @change="handleChange"
        @blur="handleBlur"
      />
    </Field>
    <ErrorMessage class="error" :name="name" />
  </div>
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";

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
  .label-cover-food {
    font-size: $fz-title;
    font-weight: $fw-title;
    color: $secondary-color;
    margin-top: 12px;
  }
  &__input {
    margin: 12px 0 24px;
    cursor: pointer;
    &::-webkit-file-upload-button {
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
