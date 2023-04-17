export interface IProduct {
  id: number;
  value: string;
  product: string;
}

export type ProductsListMenu = IProduct & {
  checked: boolean;
};

export interface IProductForm {
  productName: string;
  productDescription: string;
  productPrice: string;
  productWeight: string;
  product: string;
  productCover: any | string;
}

export interface IFormValues {
  email: string;
  password: string;
}

export type FetchProducts = IProductForm & {
  id: string;
};
