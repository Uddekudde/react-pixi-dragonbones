import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Main from './main.js';
import { Provider } from "react-redux";

import store from "./store.js";
import 'normalize.css';


ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Main />
        </HashRouter>
    </Provider>
), document.getElementById('root'));