import React from 'react'
import './footer.css'
import HDataSystemslogo from "../../assets/images/hdatalogo.PNG";

const Footer = () => {
  return (
    <div className="footer_all_con_con">
    <div className="footer_all_con">

      <div className="footer_first_col">
<h3>COMPANY</h3>
<p>Home</p>
<p>About us</p>
<p>Services</p>
<p>Case Study</p>
<p>Industries</p>
<p>Blog</p>
<p>Contact</p>


      </div>

      <div className="footer_second_col">
      <h3>SERVICES</h3>
<p>Data Science</p>
<p>Artificial Intelligence</p>
<p>Business Intelligence</p>
<p>Deep Learning</p>
<p>Machine Learning</p>
<p>Chatbots</p>
      </div>

      <div className="footer_third_col">
      <p>Big Data Implementation</p>
<p>Data Migration</p>
<p>Data Warehouse</p>
<p>Data Visualization</p>
<p>Data Lake</p>
<p>big Data</p>
      </div>

      <div className="footer_fourth_col">
      <p>Data Analytics</p>
<p>Predictive Analytics</p>
<p>Text Analytics</p>
<p>IoT Analytics</p>
<p>Customer 360</p>
<p>Video Analytics</p>

      </div>

      <div className="footer_five_col">
      <p>Data Visualization</p>
<p>QlikSense & QlikView</p>
<p>Microsoft Power BI</p>
<p>DevOps</p>
<p>Elastic Solution</p>

      </div>

      <div className="footer_sixth_col">
      <h3>SOCIAL</h3>
      <p>Facebook</p>
<p>Instagram</p>
<p>Linkedin</p>
<p>Twitter</p>
      </div>


    </div>
    <hr/>
    <div className="footer_seventh_col">
        
    <div className="footer_seventh_col_img_aligner"><img src={HDataSystemslogo} alt="Greenland logo" /><p>© 2022 HData Systems | All Rights Reserved.</p><p id="purple_color">Site map </p> <p>|</p> <p id="purple_color1">Privacy Policy</p> </div>
      </div>
      </div>
  )
}

export default Footer
