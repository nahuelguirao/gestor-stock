import { Product, Actions } from "../types/types";

export const productsReducer = (state: Product[], action: Actions) => {
  switch (action.type) {
    case "SET PRODUCTS":
      const fetchedProducts = action.payload;
      return fetchedProducts;

    case "ADD PRODUCT":
      const newProduct = action.payload;
      return [...state, newProduct];
  }
};
