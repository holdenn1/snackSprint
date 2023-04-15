import * as yup from "yup";

export default yup.object().shape({
  productName: yup.string().required("Поле обов'язкове"),
  productDescription: yup.string().required("Поле обов'язкове"),
  productPrice: yup.string().required("Поле обов'язкове"),
  productWeight: yup.string().required("Поле обов'язкове"),
  food: yup.string().required("Поле обов'язкове"),
  foodCover: yup.string().required("Поле обов'язкове"),
});
