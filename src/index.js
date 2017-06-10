import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import router from './router';
import { Provider } from 'react-redux';
import store from './Store';

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('iceRoot'));
registerServiceWorker();
