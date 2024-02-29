import { Category, CategoryActions } from "../types/types";

export const categoriesReducer = (
  state: Category[],
  action: CategoryActions
) => {
  switch (action.type) {
    case "SET CATEGORIES":
      return action.payload.sort((a, b) => a.id - b.id);

    case "DELETE CATEGORY":
      return state.filter((category) => category.id !== action.payload);
  }
};
