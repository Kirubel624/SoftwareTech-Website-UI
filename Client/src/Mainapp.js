import React from 'react';
import App from './App';
import Login from './components/login/Login';
import Register from './components/registration/Register';
import Aboutroute from './components/Routes/About us/Aboutroute';
import Servicesroute from './components/Routes/Services/Services';
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import { useContext, useState } from "react";
import { Context } from "./context/Context";
import Contactroute from './components/Routes/Contact/Contact';


const Mainapp = () => {
  const { user, dispatch } = useContext(Context);
  return (
    <div>
      <Router>
<Routes>


          <Route path='/' element={user ?<Home />: <Login/>}/>
          <Route path='/aboutus' element={user ?<Aboutroute/>: <Login/>} />
          <Route path='/services' element={user ?<Servicesroute/>: <Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/contact' element={user ?<Contactroute/>: <Login/>} />


          <Route path='/login' element={user ?<Home/>: <Login/>} />

          {/* <Route path='/registeruser' element={''} />
          <Route path='/main' element={'<Layout><Posts/></Layout>'} />
          <Route path='/videos' element={'<Layout><VideoPage/></Layout>'} />
          <Route path='/jobs' element={'<Layout><JobPage/></Layout>'} /> */}
</Routes>
</Router>
    </div>
  );
}

export default Mainapp;
