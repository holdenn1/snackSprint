<template>
  <form class="form" @submit="onSubmit">
    <div>
      <FormInput
        type="email"
        name="email"
        :value="formValues.email"
        label="Email"
        placeholder="Email"
      />
      <FormInput
        type="password"
        name="password"
        :value="formValues.password"
        label="Password"
        placeholder="Password"
      />
    </div>
    <SubmitButton>Sign In</SubmitButton>
    <p>
      Don't have an account? Then
      <RouterLink to="/sign-up">Sign Up</RouterLink>
    </p>
  </form>
</template>

<script setup lang="ts">
import FormInput from "@/components/UI/form/inputs/FormInput.vue";
import mainFormValidateSchema from "@/utils/validate/mainFormValidateSchema";
import { useForm } from "vee-validate";
import { useUserStore } from "@/stores/UserStore";
import SubmitButton from "@/components/UI/form/inputs/SubmitButton.vue";
import type { IFormValues } from "@/types";

const userStore = useUserStore();

const formValues: IFormValues = {
  email: "",
  password: "",
};

const { handleSubmit } = useForm<IFormValues>({
  initialValues: formValues,
  validationSchema: mainFormValidateSchema,
});

const onSubmit = handleSubmit((values: IFormValues, { resetForm }) => {
  userStore.signInUser(values.email, values.password);
  resetForm();
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
