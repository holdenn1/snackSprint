<template>
  <div class="add-food-input">
    <label class="label-input" v-if="label" :for="name">{{ label }}</label>
    <input
      class="input"
      :class="{'error-input': errorMessage }"
      :type="type"
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
.add-food-input {
  @include contentFlexColumn;
  .label-input {
    font-size: $fz-title;
    font-weight: $fw-title;
    color: $secondary-color;
    margin-bottom: 10px;
  }
  .input {
    padding: 10px 8px;
    width: 420px;
    margin-bottom: 10px;
    border: none;
    border-bottom: $primary-border;
    &:focus {
      border: none;
      border-bottom: 1px solid black;
    }
  }
  .error-input{
    border-bottom: 1px solid red;
  }
  .error {
    text-align: center;
    color: red;
    margin-bottom: 6px;
  }
}
</style>
