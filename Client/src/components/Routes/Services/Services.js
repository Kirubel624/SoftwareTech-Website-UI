import React from 'react';
import Blogpage from '../../blog/Blogpage';
import Footer from '../../footer/Footer';
import Getintouch from '../../getintouch/Getintouch';
import Industries from '../../industries/Industries';
import { Navbar } from '../../navbar';
import Poweredby from '../../poweredby/Poweredby';
import Services from '../../services/Services';
import Tools from '../../tools/Tools';
const Servicesroute = () => {
  return (
    <div>
        <Navbar/>
      <Services/>
      <Industries/>
      <Tools/>
      <Blogpage/>
      <Poweredby/><br></br><br></br><br></br><br></br>
      <Getintouch/>
      <Footer/>
    </div>
  );
}

export default Servicesroute;
