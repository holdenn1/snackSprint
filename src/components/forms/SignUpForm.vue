<template>
  <form class="form" :initial-values="formValues" @submit="onSubmit">
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
    <SubmitButton>Sign Up</SubmitButton>
    <p>
      Already have an account? Then
      <RouterLink to="/sign-in">Sign In</RouterLink>
    </p>
  </form>
</template>

<script setup lang="ts">
import FormInput from "@/components/UI/form/inputs/FormInput.vue";
import SubmitButton from "@/components/UI/form/inputs/SubmitButton.vue";
import mainFormValidateSchema from "@/utils/validate/mainFormValidateSchema";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useUserStore } from "@/stores/UserStore";
import { auth } from "@/firebase";
import { useForm } from "vee-validate";
import router from "@/router";

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
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then(({ user }) => {
      if (!!user.email) {
        userStore.setUser(user.uid, user.email);
      }
      router.push("/");
    })
    .catch((e) => console.error(e));
  resetForm();
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
