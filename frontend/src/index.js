import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from "./reducks/store/store"
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
// import configureStore from './reducks/store/store';
// import {ConnectedRouter} from "connected-react-router"
import * as History from 'history';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const history = History.createBrowserHistory();
export const store = createStore(history);

// const store = configureStore();
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

// );
ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
            <App />
</BrowserRouter>
    </Provider>
    , document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
