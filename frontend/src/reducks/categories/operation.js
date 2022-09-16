import API from "../../API";
import { fetchCategoriesAction } from "./actions";
const api = new API();
export const fetchCategories = (id) => {
    return async (dispatch) => {
      return api
        .getCategories(id)
        .then((categories) => {
          dispatch(fetchCategoriesAction(categories));
        })
        .catch((error) => {
          alert("Failed to connect API: /categories/");
        });
    };
  };