import { Product, Actions } from "../types/types";

export const productsReducer = (state: Product[], action: Actions) => {
  switch (action.type) {
    case "SET PRODUCTS":
      const fetchedProducts = action.payload;
      return [...fetchedProducts].sort((a, b) => a.id - b.id);

    case "DELETE PRODUCT":
      const id = action.payload;
      return state.filter((product) => product.id != id);
  }
};
