import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
// import Example from './components/Example';

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
    {/* <Example />,  */}
    <App />,
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
