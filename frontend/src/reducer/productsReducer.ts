import { Product, Actions } from "../types/types";

export const productsReducer = (state: Product[], action: Actions) => {
  switch (action.type) {
    case "SET PRODUCTS":
      const fetchedProducts = action.payload;
      const finalState = [...fetchedProducts].sort((a, b) => a.id - b.id);
      return finalState;
  }
};
