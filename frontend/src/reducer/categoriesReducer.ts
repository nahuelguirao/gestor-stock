import { Category, CategoryActions } from "../types/types";

export const categoriesReducer = (
  state: Category[],
  action: CategoryActions
) => {
  switch (action.type) {
    case "SET CATEGORIES":
      return action.payload;

    case "DELETE CATEGORY":
      return state.filter((category) => category.id !== action.payload);
  }
};
