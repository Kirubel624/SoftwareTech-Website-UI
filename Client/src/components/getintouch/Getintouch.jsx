import React,{useEffect} from 'react'
import './getintouch.css'
import {useState} from 'react'
import Slider from 'react-rangeslider'
import Captcha from '../../assets/images/captcha.jpeg'
import Phone from '../../assets/images/call.svg'
import Address from '../../assets/images/locations.svg'
import Skype from '../../assets/images/skype-cc.svg'
import Email from '../../assets/images/emails.svg'
import Usa from '../../assets/images/usa.svg'
import India from '../../assets/images/india.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Aos from "aos"
import 'aos/dist/aos.css' 


const useSlider = (min, max, defaultState, label, id) => {
  const [state, setSlide] = useState(defaultState);
  const handleChange = e => {
    console.log('setting level', e.target.value)
    setSlide(e.target.value);
  };

  const Slider = () => (
    <input
      type="range"
      id={id}
      min={min}
      max={max}
      step={0.5}
      // value={state} // don't set value from state
      defaultValue={state} // but instead pass state value as default value
      onChange={e => console.log(e.target.value)} // don't set state on all change as react will re-render
      onMouseUp={handleChange} // only set state when handle is released
    />
  );
  return [state, Slider, setSlide];
};
const Getintouch = () => {
  useEffect(() => {
    Aos.init({duration:2000});
  
   }, [])
  const [slideValue, Slider] = useSlider(
    1,
    100,
    70,
    "Threshold",
    "threshold"
  );
  return (
    <div className="all_con_get">
          <div className="top_form_container_get">
            <div className="top_arranger">
             <div className="top_arranger_title"> <h1>Get in Touch With Us</h1></div>
             <div className="top_form_container_get_corrector">
      <div className="top_left_get">
<form>
<div className="par_align1"><p>Full Name</p><p id="red_star">*</p></div>
    <input type="text" name="name" placeholder='Your Full Name'/><br/>
    <div className="par_align1"><p>Contact Number</p><p id="red_star">*</p></div>
    <input type="text" name="contact" placeholder='Your Contact Number'id="unplanned_pad"/><br/>
     <label for="Skype">Skype</label><br/>
    <input type="text" name="Skype" placeholder='Skype'/><br/>
</form>
      </div>

      <div  className="top_right_get">
      <form>
      <div className="par_align1"><p>Email</p><p id="red_star">*</p></div>
    <input type="text" name="email" placeholder='Your Email'/><br/>
    <label for="contact">WhatsApp</label><br/>
    <input type="text" name="contact" placeholder='WhatsApp'/><br/>
     <label for="address">Address Locaton</label><br/>
    <input type="text" name="address" placeholder='Your Address'/><br/>
</form>
      </div>
  
      </div>
      <div className="project_budget_slider">
      <label for="name">Project Budget:</label><br/>
      <Slider
  min={20000}
  max={500000}
  step={1}
  value={20000}
  orientation={""}
  reverse={false}
  tooltip={true}
  labels={"projectbudget"}
  handleLabel={"dollars"}
  format={Function}
  onChangeStart={Function}
  onChange={Function}
  onChangeComplete={Function}
/>
      </div>
      <div className="get_message">
      <form>
    <label for="name">Message</label><br/>
<textarea name="" placeholder="Your Message"/>
</form>
      </div>
      <div class="slidecontainer">
  <div className="par_align"><p>Enter Captcha</p><p id="red_star">*</p></div>
 <div  className="cap_align"> <div> <img src={Captcha}/></div><div><input type="text" placeholder="Enter captcha value"/></div></div>
  
  
</div>
      <div className="get_send_btn">
        <ArrowRightAltIcon className="arrow"/>
     <div><button className="get_send_btn_btn">Send Message</button></div> 
      {/* <form>
    <input  type="button" name="contact"  value=''/>
</form> */}
      </div>
      </div>
      </div>
      <div className="top_form_container_get_left_all_con">
      <div data-aos="flip-left" data-aos-duration="2000" className="top_form_container_get_left">
<div className="top_form_container_get_left_img"><img src={Phone}/><h4>Phone</h4></div>
<div className="top_form_container_get_left_img1"><img src={Usa}/>+1 309 791 4105</div>
<div className="top_form_container_get_left_img2"><img src={India}/>+91 8000 161 161</div>
      </div>
      
      <div>
      <div data-aos="flip-right" data-aos-duration="2000" className="top_form_container_get_left_two">
<div className="top_form_container_get_left_img_two"><img src={Address}/><h4>Address</h4></div>
<div className="top_form_container_get_left_img1_two">One World Trade Center,285 Fulton Street </div>
<div className="top_form_container_get_left_img2_two">suite 8500, New York, NY 1007, United</div> States
      </div>
      </div>
      <div>
<div data-aos="flip-right" data-aos-duration="2000" className="top_form_container_get_left_three">
<div className="top_form_container_get_left_img_three"><img src={Skype}/><h4>Skype</h4></div>
<div className="top_form_container_get_left_img1_three">hyperlink infosystem</div>
{/* <div className="top_form_container_get_left_img2"><img src={India}/>+91 8000 161 161</div> */}
      </div>
      </div>
      <div>
      <div data-aos="flip-left" data-aos-duration="2000"  className="top_form_container_get_left_four">
<div className="top_form_container_get_left_img_four"><img src={Email}/><h4>Email</h4></div>
<div className="top_form_container_get_left_img1_four">info@hyperlinkinfosystem.com</div>
{/* <div className="top_form_container_get_left_img2"><img src={India}/>+91 8000 161 161</div> */}
      </div>
      </div>
      </div>
      {/* <div className='top_right_get'>sdfsdfsdfds</div> */}
    </div>
    
  )
}

export default Getintouch
