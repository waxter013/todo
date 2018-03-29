import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/index.js';
import initialState from './store/index.js';

import './index.css';
import 'material-components-web/dist/material-components-web.min.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';


const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
