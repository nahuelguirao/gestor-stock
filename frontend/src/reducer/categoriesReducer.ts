import { Category, CategoryActions } from "../types/types";

export const categoriesReducer = (
  state: Category[],
  action: CategoryActions
) => {
  switch (action.type) {
    case "SET CATEGORIES":
      console.error(state); //BORRAR
      return action.payload;
  }
};
