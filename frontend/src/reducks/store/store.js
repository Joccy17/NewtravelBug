import { 
    legacy_createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension'
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from 'redux-thunk';
import { CategoryReducer } from '../categories/reducers';
import { FavoritesReducer } from '../favorites/reducers';
import { PlacesReducer } from '../places/reducers';

// import { PostsReducer } from '../posts/reducers';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            places:PlacesReducer,
            categories:CategoryReducer,
            favorites: FavoritesReducer,
            
       }),
       composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
        // DEBUG MODE
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       )
    )
}