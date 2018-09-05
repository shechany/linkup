import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from "./components/Login";
import App from './App';
import "./App.css";
import registerServiceWorker from './registerServiceWorker';
// import Bootstrap from "bootstrap/dist/css/bootstrap.css";



ReactDOM.render(<App />, document.getElementById('wraper'));
registerServiceWorker();
 
