export const ADD_PLACE = "ADD_PLACE"
export const addPlaceAction = (places) => {
    return {
        type : ADD_PLACE,
        payload : places
    }
}
export const FETCH_PLACE = "FETCH_PLACE"
export const fetchPlaceAction = (places) => {
    return {
        type : FETCH_PLACE,
        payload : places
    }
}