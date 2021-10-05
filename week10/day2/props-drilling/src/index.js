import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from './reducers/rootReducer/rootReducer';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, reduxDevTools);
ReactDOM.render(
  <React.StrictMode>
    {/* Wrap our app in our provider */}
    <Provider store={(store)}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


