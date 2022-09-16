import { useDispatch } from "react-redux";
import API from "../../API";
import { fetchPlaceAction } from "./actions";


const api = new API();

export const fetchPlaces = (search,category, id) => {
    return async (dispatch) => {
      return api
        .getPlaces(search,category, id)
        .then((places) => {
          dispatch(fetchPlaceAction(places));
        })
        .catch((error) => {
          alert("Failed to connect API: /places/");
        });
    };
  };