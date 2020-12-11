import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Router/index'
import store from './Reducer/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter } from "react-router-dom";

import Modal from "react-modal";
import { toast } from 'react-toastify';
import "./assets/global.scss"
import 'react-toastify/dist/ReactToastify.css';
//toast
toast.configure();
//modal
Modal.setAppElement("#root");
//funcional con redux testing v.2
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
