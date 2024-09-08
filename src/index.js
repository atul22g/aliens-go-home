import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import { Provider } from 'react-redux';

import Game from './containers/Game';
import reducer from './reducers';

import registerServiceWorker from './registerServiceWorker';

import './index.css'


/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */


ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();
