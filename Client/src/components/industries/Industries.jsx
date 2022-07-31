import React from 'react'
import {useEffect} from 'react'
import './industries.css'
import Finance from '../../assets/images/banking-finance.jpg'
import Insurance from '../../assets/images/insurance.jpg'
import Manufacturing from '../../assets/images/manufacturing.jpg'
import Aos from "aos"
import 'aos/dist/aos.css' 

const Industries = () => {
  const Indimgcomp=()=>{
    <div>
      <img src={Finance}/>
      <div></div>
    </div>
  }
  useEffect(() => {
    Aos.init({duration:5000});
  
   }, [])
  return (
    <div className="container_indus">
      <div className="top_bar_indus">
      <p className="">Industries</p>
<h1>Industries We Are Transforming</h1>
<p>The transformation of industries by Big Data Analytics, Artificial Intelligence, and Data Science</p>
<h3></h3>
</div>
<div className="container_image_indus">
<div className="whole-overlay" data-aos="zoom-in" data-aos-duration="5000">
<div className="image_indus_one">
  <img src={Finance}></img>


 <div className="purple-overlay"></div>
</div>
  <div className="image_indus_whole_text_overlay"><p id="par_one_title" className="image_indus_undertext">
    Banking and Financials</p>
<p id="par_two_title">Power your Data Analytics and prevent fraudulent activity and 
ensure data security while integrated with third-party</p></div>
</div>
{/* second image */}
<div className="whole-overlay" data-aos="zoom-in" data-aos-duration="5000">
<div className="image_indus_one">
  <img src={Insurance}></img>


 <div className="purple-overlay"></div>
</div>
  <div className="image_indus_whole_text_overlay"><p id="par_one_title" className="image_indus_undertext">
    Insurance</p>
<p id="par_two_title">Align insurance with faster decision-making, enhance legacy system, 
empower customer relations, and integrated third-party services</p></div>
</div>
{/* third image */}
<div className="whole-overlay" data-aos="zoom-in" data-aos-duration="5000">
<div className="image_indus_one">
  <img src={Manufacturing}></img>
 <div className="purple-overlay"></div>
</div>
  <div className="image_indus_whole_text_overlay"><p id="par_one_title" className="image_indus_undertext">
    Manufacturing</p>
<p id="par_two_title">Transform your business by boosting productivity, refine adaptability with data</p></div>
</div>

</div>
    </div>
  )
}

export default Industries
