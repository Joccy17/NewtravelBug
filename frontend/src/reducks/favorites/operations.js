import API from "../../API";
import {
  addFavoriteAction,
  fetchFavoriteAction,
  deleteFavoriteAction,
} from "./actions";
const api = new API();

const FAVORITES_KEY = "FAVORITES_KEY";
export const fetchFromLocalStorage = () => {
  return async (dispatch) => {
    let favoritesJSON = localStorage.getItem(FAVORITES_KEY);
    let favorites = [];
    if (favoritesJSON) {
      favorites = JSON.parse(favoritesJSON);
    }
    dispatch(fetchFavoriteAction(favorites));
  };
};
export const addFavorite = (place) => {
  return async (dispatch, getState) => {
    let prevFavorites = getState().favorites.list;
    console.log("prevFavorites",place);
    let nextFavorites = prevFavorites
    if(!prevFavorites.some(favorite=>favorite.id === place.id)){
    nextFavorites = [place, ...prevFavorites];
    }
   
    setToLocalStorage(nextFavorites);
    dispatch(addFavoriteAction(nextFavorites));
  };
};
export const deleteFavorite = (id) => {
  return async (dispatch, getState) => {
    let prevFavorites = getState().favorites.list;
    const nextFavorites = prevFavorites.filter(favorite=>favorite.id !== id);
    setToLocalStorage(nextFavorites);
    dispatch(deleteFavoriteAction(nextFavorites));
  };
};
export const setToLocalStorage = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};




