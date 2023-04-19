export interface IProductSelectList {
  id: number;
  value: string;
  product: string;
}

export type ProductsListMenu = IProductSelectList & {
  checked: boolean;
};

export interface IProductForm {
  productName: string;
  productDescription: string;
  productPrice: number;
  productWeight: number;
  product: string;
  productCover: any | string;
}

export interface IFormValues {
  email: string;
  password: string;
}

export type Product = IProductForm & {
  id: string;
};

export type ProductInBasket = Product & {
  amountProducts: number;
  sumProducts: number;
  sumAllAmountProducts: number;
  sumAllOrder: number;
};
