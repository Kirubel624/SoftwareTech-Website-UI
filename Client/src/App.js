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
import {useEffect} from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Aos from "aos"
import 'aos/dist/aos.css' 
import PureCounter from "./components/purecounter";
import Mainapp from "./Mainapp";

function App() {

  return (
    <div className="App">
<Mainapp/>

    </div>
  );
}

export default App;
