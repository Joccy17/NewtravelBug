export const ADD_FAVORITE = "ADD_FAVORITE"
export const addFavoriteAction = (favorites) => {
    return {
        type : "ADD_FAVORITE",
        payload : favorites
    }
}
export const FETCH_FAVORITE = "FETCH_FAVORITE"
export const fetchFavoriteAction = (favorites) => {
    return {
        type : "FETCH_FAVORITE",
        payload : favorites
    }
}
export const DELETE_FAVORITE = "DELETE_FAVORITE"
export const deleteFavoriteAction = (favorites) => {
    return {
        type : "DELETE_FAVORITE",
        payload : favorites
    }
}