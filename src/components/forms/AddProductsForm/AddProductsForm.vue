<template>
  <div class="add-products-form-wrapper">
    <form class="form" @submit="onSubmit">
      <AddProductInput
        type="text"
        name="productName"
        :value="formValues.productName"
        label="Назва страви"
        placeholder="Назва страви"
      />
      <TextareaForDescriptionProduct
        name="productDescription"
        :value="formValues.productDescription"
        label="Опис"
        placeholder="Опис"
      />
      <AddProductInput
        type="number"
        name="productPrice"
        :value="formValues.productPrice"
        label="Ціна"
        placeholder="Ціна"
      />
      <AddProductInput
        type="number"
        name="productWeight"
        :value="formValues.productWeight"
        label="Вага"
        placeholder="Вага"
      />
      <SelectProduct
        name="product"
        default-value="Оберіть категорію"
        label="Категорія"
      />
      <UploadProductCoverInput
        label="Оберіть фото для завантаження"
        name="productCover"
        :value="formValues.productCover"
      />
      <div class="add-products-form-wrapper__btn-conteiner">
        <SubmitButton>Submit</SubmitButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import AddProductInput from "@/components/UI/form/inputs/AddProductInput.vue";
import TextareaForDescriptionProduct from "@/components/UI/form/inputs/TextareaForDescriptionProduct.vue";
import SelectProduct from "@/components/UI/form/inputs/SelectProduct.vue";
import UploadProductCoverInput from "@/components/UI/form/inputs/UploadProductCoverInput.vue";
import productFormValidateSchema from "@/utils/validate/productFormValidateSchema";
import SubmitButton from "@/components/UI/form/inputs/SubmitButton.vue";
import type { IProductForm } from "@/types";
import { useAdminStore } from "@/stores/AdminStore";

const formValues: IProductForm = {
  productName: "",
  productDescription: "",
  productPrice: 0,
  productWeight: 0,
  product: "",
  productCover: "",
};

const { handleSubmit } = useForm<IProductForm>({
  validationSchema: productFormValidateSchema,
  initialValues: formValues,
});

const adminStore = useAdminStore();

const onSubmit = handleSubmit((values: IProductForm, { resetForm }) => {
  adminStore.uploadProduct(values);
  resetForm();
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables/variables";
.add-products-form-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  .form {
    max-width: 440px;
    width: 100%;
  }
  &__btn-conteiner {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 40px 0 60px;
  }
}
</style>
