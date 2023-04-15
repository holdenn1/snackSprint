<template>
  <form class="form" :initial-values="formValues" @submit="onSubmit">
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
import SubmitButton from "@/components/UI/form/inputs/SubmitButton.vue";
import mainFormValidateSchema from "@/utils/validate/mainFormValidateSchema";
import { useForm } from "vee-validate";
import { useUserStore } from "@/stores/UserStore";

export interface IFormValues {
  email: string;
  password: string;
}

const userStore = useUserStore();

const { handleSubmit } = useForm<IFormValues>({
  validationSchema: mainFormValidateSchema,
});

const formValues: IFormValues = {
  email: "",
  password: "",
};

const onSubmit = handleSubmit((values: IFormValues, { resetForm }) => {
  userStore.signInUser(values.email, values.password);
  resetForm();
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
