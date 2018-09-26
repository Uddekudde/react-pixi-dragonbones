import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './main.js';
import { Provider } from "react-redux";

import store from "./store.js";
import 'normalize.css';


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));