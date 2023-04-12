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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useForm } from "vee-validate";
import router from "@/router";

export interface IFormValues {
  email: string;
  password: string;
}

const { handleSubmit } = useForm<IFormValues>({
  validationSchema: mainFormValidateSchema,
});

const formValues: IFormValues = {
  email: "",
  password: "",
};

const onSubmit = handleSubmit((values: IFormValues, { resetForm }) => {
  signInWithEmailAndPassword(auth, values.email, values.password)
    .then(({ user }) => {
      if (!!user.email) {
        console.log(user.email);
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
