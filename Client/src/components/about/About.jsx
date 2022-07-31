import React from 'react';
import './about.css';
import Automaton from '../../assets/images/automation-ab.jpg'
import BusinessIntell from '../../assets/images/business-intelligence-ab.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const About = () => {
  return (
    <div className='about_right'>
        <div className='about_right_text'>
      <h1>About HData Systems</h1>
      <h3></h3>
<p>We are a Big Data Analytics, Data Science, and Artificial Intelligence company starting in 2019. HData Systems offers clients to build data-driven organizations, achieve their goals with more efficiency, ROI, and decision-making. Our company provides distinguished analytics metrics that analyze you the best for your business.</p>
<div className="get_send_btn">
        <ArrowRightAltIcon className="arrow"/>
     <div><button className="get_send_btn_btn">Get A Quote</button></div> 
      {/* <form>
    <input  type="button" name="contact"  value=''/>
</form> */}
      </div>
</div>
<div className="about_left_img">
<img src={Automaton}/>

</div>
<div className="about_left_img_lefter"><img src={BusinessIntell}/></div>
    </div>
  );
}

export default About;
