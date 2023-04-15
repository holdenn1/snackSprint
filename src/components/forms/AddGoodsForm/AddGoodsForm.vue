<template>
  <div class="add-goods-form-wrapper">
    <form class="form" :initial-values="formValues" @submit="onSubmit">
      <AddFoodInput
        type="text"
        name="productName"
        :value="formValues.productName"
        label="Назва страви"
        placeholder="Назва страви"
      />
      <TextareaForDescriptionFood
        name="productDescription"
        :value="formValues.productDescription"
        label="Опис"
        placeholder="Опис"
      />
      <AddFoodInput
        type="text"
        name="productPrice"
        :value="formValues.productPrice"
        label="Ціна"
        placeholder="Ціна"
      />
      <AddFoodInput
        type="text"
        name="productWeight"
        :value="formValues.productWeight"
        label="Вага"
        placeholder="Вага"
      />
      <SelectFood
        name="food"
        default-value="Оберіть категорію"
        label="Категорія"
      />
      <UploadFoodCoverInput
        label="Оберіть фото для завантаження"
        name="foodCover"
        :value="formValues.foodCover"
      />
      <div class="add-goods-form-wrapper__btn-conteiner">
        <SubmitButton>Submit</SubmitButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import AddFoodInput from "@/components/UI/form/inputs/AddFoodInput.vue";
import TextareaForDescriptionFood from "@/components/UI/form/inputs/TextareaForDescriptionFood.vue";
import SelectFood from "@/components/UI/form/inputs/SelectFood.vue";
import UploadFoodCoverInput from "@/components/UI/form/inputs/UploadFoodCoverInput.vue";
import SubmitButton from "@/components/UI/form/inputs/SubmitButton.vue";
import foodFormValidateSchema from "@/utils/validate/foodFormValidateSchema";

interface IGoodsForm {
  productName: string;
  productDescription: string;
  productPrice: string;
  productWeight: string;
  food: string;
  foodCover: string;
}

const { handleSubmit } = useForm<IGoodsForm>({
  validationSchema: foodFormValidateSchema,
});

const formValues: IGoodsForm = {
  productName: "",
  productDescription: "",
  productPrice: "",
  productWeight: "",
  food: "",
  foodCover: "",
};

const onSubmit = handleSubmit((values: IGoodsForm, { resetForm }) => {
  console.log(values);

  resetForm();
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables/variables";
.add-goods-form-wrapper {
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
