export type Product = {
  id: number;
  title: string;
  short_description: string;
  stock: number;
  price: string;
};

export type Category = {
  id: number;
  name: string;
};

export type InputValues = {
  title: string;
  short_description: string;
  stock: number;
  price: string;
};

export type Actions =
  | { type: "SET PRODUCTS"; payload: Product[] }
  | { type: "DELETE PRODUCT"; payload: number };

export type CategoryActions = { type: "SET CATEGORIES"; payload: Category[] };
