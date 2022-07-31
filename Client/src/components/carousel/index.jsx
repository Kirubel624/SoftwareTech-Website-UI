import React from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Img1 from '../../assets/images/datascience.jpg'
import styled from 'styled-components';
import { Paper, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import {useState, useEffect} from 'react'
import './carousel.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  height: 43px;
  /* width: 120px; */
  width: 120px;
  border-radius: 30px;
  background-color: #532AB8;
  background-image: linear-gradient(to right, transparent 0%, #993BE2 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;

  /* &:hover {
    background-color: #00c9ff;
  } */

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;
export function Topcarousel (props)  {
  const [carousel,setCarousel]=useState(1);
  const [value,setValue]=useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      if(carousel>2){
        setCarousel(1);
      }else{
      setCarousel(carousel+1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [carousel]);
const handleCarouselai=()=>{
  setCarousel(1);
}
const handleCarouselbigdata=()=>{
  setCarousel(2);
}
const handleCarouseldatasci=()=>{
  setCarousel(3);
}
const renderButton=()=>{
  if(carousel==1||carousel==2||carousel==3){
    <div><button>btn1</button> <button>btn1</button> <button>btn1</button></div>
  }

}
return(
<div className="carousel_con">

{carousel==1 &&(
<div className="carso_one">
<p>Reimagine Real-World with Technology</p>
<h1>Artificial Intelligence</h1>
<p className="par_g">Company</p>
<h3></h3>
<p>Transform your business with our excellent innovative</p>
<p className='adjust_pad'>technologies and insights.</p>
<div className="get_send_btna">
        <ArrowRightAltIcon className="arrow"/>
     <div><button className="get_send_btn_btna">Get A Quote</button></div> 
      {/* <form>
    <input  type="button" name="contact"  value=''/>
</form> */}
      </div>
<div className="carousel_btn">
  <button className={carousel===1 ? 
       "big_btn": "small_btn"}onClick={handleCarouselai} ></button>
 <button className={carousel===2 ? 
       "big_btn": "small_btn"} onClick={handleCarouselbigdata}></button> 
 <button className={carousel===3 ? 
       "big_btn": "small_btn"} onClick={handleCarouseldatasci}></button></div>
</div>

)}

{carousel==2 &&(
<div className="carso_two">
<p>For Leading Better Brilliant Future</p>
<h1>Big Data Analytics</h1>
<p className="par_g">Company</p>
<h3></h3>
<p>We help you to grow your business in making scalable</p>
<p className='adjust_pad'>reliable decisions.</p>
<div className="get_send_btna">
        <ArrowRightAltIcon className="arrow"/>
     <div><button className="get_send_btn_btna">Get A Quote</button></div> 
      {/* <form>
    <input  type="button" name="contact"  value=''/>
</form> */}
      </div>
<div className="carousel_btn">
  <button  className={carousel===1 ? 
       "big_btn": "small_btn"} onClick={handleCarouselai}></button>
 <button  className={carousel===2 ? 
       "big_btn": "small_btn"} onClick={handleCarouselbigdata}></button> 
 <button  className={carousel===3 ? 
       "big_btn": "small_btn"} onClick={handleCarouseldatasci}></button></div>
</div>

)}
{carousel==3 &&(
<div className="carouse_three">
<p>Obtain Data-Driven Insights and Analytics</p>
<h1>Data Science</h1>
<p className="par_g">Company</p>
<h3></h3>
<p>Excel your business in the power of data and analytics to </p>
<p className='adjust_pad'>make accurate decisions.</p>
<div className="get_send_btna">
        <ArrowRightAltIcon className="arrow"/>
     <div className="carousel_btn_text_color_white"><button className="get_send_btn_btna">Get A Quote</button></div> 
      {/* <form>
    <input  type="button" name="contact"  value=''/>
</form> */}
      </div>
<div className="carousel_btn">
  <button  className={carousel===1 ? 
       "big_btn": "small_btn"} onClick={handleCarouselai}></button>
 <button  className={carousel===21 ? 
       "big_btn": "small_btn"} onClick={handleCarouselbigdata}></button> 
 <button  className={carousel===3 ? 
       "big_btn": "small_btn"} onClick={handleCarouseldatasci}></button></div>
</div>

)}
{carousel==4 &&(
  <div className="carouse_three">
<p>Obtain Data-Driven Insights and Analytics</p>
<h1>Data Science</h1>
<p className="par_g">Company</p>
<h3></h3>
<p>Excel your business int the power of data and analytics to </p>
<p className='adjust_pad'>make accurate decisions.</p>
<RegisterButton>Get A Quote</RegisterButton><br/><br/>
<div className="carousel_btn">
  <button  className={carousel===1 ? 
       "big_btn": "small_btn"} onClick={handleCarouselai}></button>
 <button  className={carousel===21 ? 
       "big_btn": "small_btn"} onClick={handleCarouselbigdata}></button> 
 <button  className={carousel===3 ? 
       "big_btn": "small_btn"} onClick={handleCarouseldatasci}></button></div>
</div>
)}

</div>
);



}

export default Topcarousel;
