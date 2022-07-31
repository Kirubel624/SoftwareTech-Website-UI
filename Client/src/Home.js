import React from 'react';
import "./App.css";
import { Navbar } from "./components/navbar";
import {Topcarousel} from "./components/carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import InfoPage from "./components/infopage/Index";
import Services from "./components/services/Services";
import Tools from "./components/tools/Tools";
import Process from "./components/process";
import Industries from "./components/industries/Industries";
import About from "./components/about/About";
import Poweredby from "./components/poweredby/Poweredby";
import Blogpage from "./components/blog/Blogpage";
import Faq from "./components/faq/Faq";
import Getintouch from "./components/getintouch/Getintouch";
import Footer from "./components/footer/Footer";
import {useEffect, useContext} from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Aos from "aos"
import 'aos/dist/aos.css' 
import PureCounter from "./components/purecounter";
import { Context } from "./context/Context";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Roll';
import ShowCase from './components/Showcase/index'
import showcase from './components/showcase.json'
const Home = () => {
  const { user, dispatch } = useContext(Context);
    useEffect(() => {
        window.addEventListener("scroll", ()=>{
          
          console.log(window.scrollY)
           
        })
       }, []);
     
     
       useEffect(() => {
           Aos.init({duration:2000});
      
       }, [])
  return (
    <div>
            <Navbar />
<Topcarousel/>
{/* <PureCounter/> */}

<InfoPage/>
<Services/>
<Flip left><Tools/></Flip>
<Process/>
<Industries/>
{/* <div data-aos="slide-up" data-aos-duration="4000" className=""> */}
<ShowCase showcase={showcase.showcase} data-aos="zoom-out-right" data-aos-duration="4000" />
 <Fade up> <About/></Fade>
  {/* </div> */}
<Poweredby/>
{user&&<div data-aos="slide-left" data-aos-easing="linear"
     data-aos-duration="1500"  className=""><Blogpage/></div>}
<Faq/>
<Getintouch/>
<Footer/>
    </div>
  );
}

export default Home;
