import React from "react";
import styled from "styled-components";
import './navbar.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IndLogo from '../../assets/images/ED.PNG'
import IndLogo2 from '../../assets/images/ID.PNG'
import IndLogo3 from '../../assets/images/MD.PNG'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Navigate, Route, Routes, Link,BrowserRouter as Router } from 'react-router-dom';
const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: black;
 
  padding-bottom: 10px;

`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  height: 100%;
  list-style: none;

`;

const LinkItem = styled.li`
  


li:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #FFF;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}
li:hover::before {
  visibility: visible;
  transform: scaleX(1);
  cursor: pointer;
}
 
`;

// const Link = styled.p`
//   text-decoration: none;
//   color: inherit;
//   font-size: inherit;
//   color: white;
//   display: inline-block;
//   position: relative;
  

// `;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
      <div class="middle">
      <Link to="/"><li>Home</li></Link>
        
        <Link to="/aboutus">
        
          <li>About Us</li>
          </Link>
        
        
         <div className="lidropdown"> 
         
         <Link to="/services"><li className="lidropbtn">Services</li></Link>
         
         {/* <KeyboardArrowDownIcon className="drop_down_arrow"/> */}
         <div class="lidropdown-content">
           <div className="lidrop_spacer">
      <div className="lidrop_h4"><h4>Data Science</h4>
     <p> Latest technology that reshape your business
thoroughly with advance features.</p>

<p>Artificial Intelligence</p>
<p>Business Intelligence</p>
<p>Deep Learning</p>
<p>Machine Learning</p>
<p>Chatbots</p>
<p>AIOps</p>
<h4>Data Analytics</h4>
<p>New factors of data and analysis that give
a different outlook to the business.





</p>

<p>Predictive Analytics</p>
<p>Text Analytics</p>
<p>IoT Analytics</p>
<p>Customer 360</p>
<p>Video Analytics</p>

      </div>
     <div className="li_drop_two"> <h4>Big Data Implementation</h4>
     <p>A small or large data that transform your
business & provide new strategies.</p>

<p>Data Migration</p>
<p>Data Warehouse</p>
<p>Data Virtualization</p>
<p>Data Lake</p>
<p>Big Data</p>





ITSM
<h4>Data Visualization</h4>
     <p>Qlik Sense & QlikView</p>

<p>Microsoft Power BI</p>
<p>DevOps</p>
<h4>Elastic Solution</h4>
<h4>Security</h4>
<h4>CloudOps</h4>
<h4>ITSM</h4>
</div>
     <div className="lidrop_three"> 
     <h4>To Explore More Opprtunity</h4>
     <p>Leave a message to us and we will reach out to you soon </p>
     {/* <p></p> */}
     </div>
      
      </div>
    </div>
         
         </div>
        
        
  <div className="lidropdown1"> 
  <Link to="/services"><li className="lidropbtn1">Industries </li></Link> 
         {/* <KeyboardArrowDownIcon/> */}
         <div class="lidropdown-content1">
           <div className="lidrop_spacer1">
           <div className="lidrop_h41">
    <div className="i_fixer"><img src={IndLogo}/><p> Banking and Financial</p></div>
     



    <div className="i_fixer"><img src={IndLogo}/><p> Insurance</p></div>
    <div className="i_fixer"><img src={IndLogo}/><p> Manufacturing</p></div>
    <div className="i_fixer"><img src={IndLogo}/><p> Transportation and Logistics</p></div>
    <div className="i_fixer"><img src={IndLogo}/><p> Healthcare</p></div>
      </div>


     <div className="li_drop_two1"> 
     




     <div className="i_fixer"> <img src={IndLogo2}/><p> Retail</p></div>

     <div className="i_fixer"><img src={IndLogo2}/><p> Media and Entertainment</p></div>
     <div className="i_fixer"><img src={IndLogo2}/><p> Education</p></div>
     <div className="i_fixer"> <img src={IndLogo2}/><p> Automotive</p></div>
     <div className="i_fixer"> <img src={IndLogo2}/><p> Travel and Hospitality</p></div>
</div>
     <div className="t_al">
    <div className="i_fixer"><img src={IndLogo3}/><p> Oil and Gas</p></div>
    <div className="i_fixer"><img src={IndLogo3}/><p>Real Estate and E-commerce</p></div>
    <div className="i_fixer"><img src={IndLogo3}/><p>Telecom</p></div>
    <div className="i_fixer"><img src={IndLogo3}/><p> Food and Beverages</p></div>
    <div className="i_fixer"><img src={IndLogo3}/><p>Energy</p></div>




     </div>
      </div>
      <div className="bottom_drop_box">
        <div className="bottom_drop_box_aligner">
        <div className="bottom_drop_box_left">
        <h2>To Explore More Opportunity</h2>
        <p>Leave a message to us and we will reach out to you soon</p>
        </div>
        <div className="bottom_drop_box_right">
<div className="get_send_btn1">
        <ArrowRightAltIcon className="arrow1"/>
     <div><button className="get_send_btn_btn1">Contact Us</button></div> 
      {/* <form>
    <input  type="button" name="contact"  value=''/>
</form> */}
      </div>
        </div>
        </div>
        </div>
    </div>
         
         </div>
      
        
          <li>Case Study</li>
      
        
          <li>Blog</li>
      
        
         <Link to="/contact"> <li>Contact</li></Link>
          </div>
      
      </LinksWrapper>
    </NavLinksContainer>
  );
}
