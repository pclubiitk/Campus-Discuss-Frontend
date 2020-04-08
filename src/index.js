import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/sidebar/index'
import * as serviceWorker from './serviceWorker';

const name = "John Doe";
const streams = ["Stream1", "Stream Two", "This Is A Long Stream Name", "And It Goes Like This"];
ReactDOM.render(
  <React.StrictMode>
    <Home name={name} streams={streams} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
