import React, {useEffect} from 'react'
import './services.css'
import DS from '../../assets/images/DS.PNG'
import ScrollAnimation from 'react-animate-on-scroll'
import Aos from "aos"
import 'aos/dist/aos.css' 
import { useContext, useRef } from "react";

import { Context } from "../../context/Context";
export function ServiceCard (props){
  useEffect(() => {
   Aos.init({duration:5000});
 
  }, [])
    return(
    <div className="serv_con">
        <div className="service_card">
         <img src={DS } className="top" />
         <h4 className="top">{props.name}</h4>
         <p className="top">{props.info}</p>
                
        <div
        className="overlaydiv">
           
        </div>
        <div className="white_text_overlay">
        <img src={DS } className="" />
         <h4 className="">{props.name}</h4>
         <p className="">{props.info}</p>
        </div>
        </div>
    </div>
    )
}
const Services = () => {
  const { user} = useContext(Context);
  
  return (
    <div className="info_page_cont">
      <div className="info_page_services">
      <p className="">Services</p>
<h1>Our Services</h1>
<h3></h3>
</div>
<div className="info_page4">
 
<div data-aos="fade-up" data-aos-duration="5000" className="info_page2">

<ServiceCard name="Data Science" 
info="Data Science is a structured and unstructured model to extract insightfrom data in diffrent forms and addvalue to the business"/>
<ServiceCard name="Data Warehousing" info="Data warehouse system is a powerful, scalable, and affordable—enabling organizations to share petabytes of data across thousands of users."/>
<ServiceCard name="Data Analytics" info="Data Analytics is the process to analyze data sets in order to draw conclusions about the information with specific systems & software."/>
<ServiceCard name="Data Visualization" info="Data visualizations perform the best role in addressing this challenge and help with interacting science outputs to a wide variety of audiences."/>

</div>





<div data-aos="fade-left" data-aos-duration="4000" className="info_page2"><ServiceCard name="Data Migration" info="Data Migration is the process of transferring data from one storage system to another to save necessary and relevant data."/>
<ServiceCard name="Big Data Implementation" info="Big Data implementation helps you to make decisions on the basis of insightful data and forecast business future."/>
<ServiceCard name="Predictive Analytics" info="Advance Analytics is a tool that help you to extract more data and forecast trends, behaviours, events, and more to perform better."/>
<ServiceCard name="IoT Analytics" info="IoT Analytics is an application of data analysis tools and adds value to the data to facilities by connecting with the Internet of Things."/></div>
<div data-aos="fade-right" className="info_page2">
    <ServiceCard name="Customer 360" info="Customer 360 provides data with a 360 degree view and enables you to interact and support every detail about the customer."/>
    <ServiceCard name="DevOps" info="DevOps is a set of practices that merge IT operations and software development to deliver high quality software and improved software life cycle. "/>
    <ServiceCard name="Microsoft Power BI" info="Microsoft Power BI is a business analytics service that provides interactive visualizations & business intelligence to create dashboards & reports ."/>
    <ServiceCard name="Qlik Sense and QlikView" info="Qlik Sense & QlikView is an analytics solution and platform to integrate data, analysis and data-driven intelligence that deliver business growth. "/></div>
</div>
    </div>
  )
}

export default Services
