import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import Aboutroute from "./components/Routes/About us/Aboutroute";
import Serviceroute from "./components/Routes/Services/Services";
import Register from './components/registration/Register';
import Login from './components/login/Login';
import { Provider } from "react-redux";


import { ContextProvider } from "./context/Context";
ReactDOM.render(  <React.StrictMode>


<ContextProvider>
<App/>

</ContextProvider>
 

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
