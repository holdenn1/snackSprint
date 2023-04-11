<template>
  <div class="wrapper">
    <label class="label-input" v-if="label" :for="name">{{ label }}</label>
    <input
      class="input"
      :type="name"
      :id="name"
      :name="name"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
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
  type: string;
  name: string;
  value: string;
  label?: string;
  placeholder: string;
}>();

const name = toRef(props, "name");
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<style lang="scss" scoped>
@import "@/styles/mixins/contentFlexColumn.scss";
@import "@/styles/variables/variables";
.wrapper {
  @include contentFlexColumn;
  .label-input {
    font-size: $fz-title;
    font-weight: $fw-title;
    color: $secondary-color;
    margin-bottom: 10px;
  }
  .input {
    padding: 10px 8px;
    width: 220px;
    margin-bottom: 10px;
    border-radius: $primary-border-radius;
    border: $primary-border;
    &:focus{
      border: 1px solid black;
    }
  }
  .error{
    text-align: center;
    color: red;
  }
}
</style>
