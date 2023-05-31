<template>
  <div class="wrapper">
    <label class="label-area" v-if="label" :for="name">{{ label }}</label>
    <textarea
      class="area"
      :class="{ 'error-area': errorMessage }"
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
  margin: 0 20px;
  .label-area {
    font-size: $fz-title;
    font-weight: $fw-title;
    color: $secondary-color;
    margin-bottom: 10px;
  }
  .area {
    padding: 10px 8px;
    max-width: 420px;
    width: 100%;
    height: 120px;
    margin-bottom: 10px;
    resize: none;
    border: $primary-border;
    &:focus {
      border: 1px solid black;
    }
  }
  .error-area {
    border: 1px solid red;
  }
  .error {
    text-align: center;
    color: red;
  }
}
</style>
