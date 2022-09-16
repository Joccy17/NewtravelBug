import * as Actions from './actions';
import initialState from '../store/initialState';

export const FavoritesReducer = (state = initialState.favorites, action) => {
    switch (action.type) {
        case Actions.ADD_FAVORITE:
            return {
                ...state,
                list: action.payload
            };
        case Actions.FETCH_FAVORITE:
            return {
                ...state,
                list: action.payload
            };
        case Actions.DELETE_FAVORITE:
            return {
                ...state,
                list: action.payload
            }

        default:
            return state;
    }
};