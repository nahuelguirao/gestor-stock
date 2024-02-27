export type Product = {
  id?: number;
  title: string;
  short_description: string;
  stock: number;
  price: string;
};

export type Actions =
  | { type: "SET PRODUCTS"; payload: Product[] }
  | { type: "ADD PRODUCT"; payload: Product };
