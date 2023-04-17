<template>
  <div class="upload-cover">
    <label :for="name" class="label-cover-product">{{ label }}</label>
    <input
      class="upload-cover__input"
      type="file"
      :value="value"
      @change="handleChange"
      @blur="handleBlur"
    />
    <p class="error" v-show="errorMessage || meta.valid">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { toRef } from "vue";

const props = defineProps<{
  name: string;
  label: string;
  value: string;
}>();

const name = toRef(props, "name");

const { value, errorMessage, handleBlur, handleChange, meta } = useField(
  name,
  undefined,
  { initialValue: props.value }
);

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
