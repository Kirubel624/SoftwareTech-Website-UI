import React from 'react'
import { Navbar } from '../../navbar'
import Poweredby from '../../poweredby/Poweredby'
import Processf from '../../process'
import Getintouch from '../../getintouch/Getintouch'
import './aboutroute.css'
import Footer from '../../footer/Footer'
import Aboutusimg from '../../../assets/images/about-us-bg.jpg'
import Aboutusimg2 from '../../../assets/images/about-bg.jpg'
import About from '../../about/About'
import './aboutroute.css'
const Aboutroute = () => {
  return (
    <div className='arr_abt'>
        <Navbar/><br></br><br></br><br></br><br></br><br></br>
<About/><br></br><br></br><br></br><br></br><br></br>
        <Processf/><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br>

        <Poweredby/><br></br><br></br><br></br><br></br><br></br>
        <Getintouch/><br></br><br></br><br></br><br></br><br></br>
        <Footer/>
    </div>
  )
}

export default Aboutroute