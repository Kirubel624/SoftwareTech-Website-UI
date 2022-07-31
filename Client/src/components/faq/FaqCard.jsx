import React from 'react';
import './faqcard.css'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
const FaqCard = () => {
    const [faq,setFaq]=useState(0);
    const handleFaq=()=>{
        setFaq(1);
    }
    const handleFaq1=()=>{
        setFaq(2);
    }
    const handleFaq2=()=>{
        setFaq(3);
    }
    const handleFaq3=()=>{
        setFaq(4);
    }
    const handleFaq4=()=>{
        setFaq(5);
    }
    const handleFaq5=()=>{
        setFaq(6);
    }
    const handleCollapse=()=>{
        setFaq(0);
    }
  return (

    <div>
      <div class={faq==1?"faqcard_comp1_dark":"faqcard_comp1"}><div><p>"What is Business Intelligence?"</p></div>
      <div><h6 onClick={handleFaq} onDoubleClick={handleCollapse}><AddIcon sx={{fontSize:30}}/></h6></div>
      </div>
      <div class="faqcard_comp2_compressor">{faq==1 &&(
        <p>
            In simple terms, Business Intelligence is visions 
            and procedures introduced which employ the fact-based 
            system of support that provides the reports to improve 
            the business decision. HData Systems BI is the foundation 
            of the technical infrastructure that collects, stores, and 
            analyzes company data and present the reports and information 
            that help managers to make better decisions. 
            Many organisations overlook BI solutions as some fancy
            term and nothing mandatory to have but truth to be told
            they are becoming absolutely necessary in this competitive edge.
        </p>
      )}</div>
      <div  className={faq==2 ?"faqcard_comp_dark":"faqcard_comp"}><div><p>"What Services do you provide for Data analysis?"</p></div>
      <h6 onClick={handleFaq1}  onDoubleClick={handleCollapse}><AddIcon className="icon_plus" sx={{fontSize:30}}/></h6></div>
      <div class="faqcard_comp2_compressor"> {faq==2 &&(
<p>HData Systems provide almost every service related to data analysis. No matter what you have got for us. Whether it could be Digital Analytics Audit or Analytics Consulting or Analytics Implementation or Tag Management System or Analytics Reporting. We have got you covered for your every Data analysis needs.</p>
)}</div>


      <div className={faq==3 ?"faqcard_comp_dark":"faqcard_comp"}><div><p>"Why does having a Data Science Partner Makes Sense?"</p></div>
      <h6 onClick={handleFaq2}  onDoubleClick={handleCollapse}><AddIcon sx={{fontSize:30}}/></h6></div>
      <div class="faqcard_comp2_compressor"> {faq==3 &&(
<p>Data science partner like HData Systems can help your business to filter the best product or service to place in the market, who could be your target audience, which trend could be beneficial for your business and even which opportunities could be the best fit for your business as well. Apart from that, they can also help to recruit and train the most suitable talents for your business.</p>
)}</div>


      <div className={faq==4 ?"faqcard_comp_dark":"faqcard_comp"}><div><p>"How Big data differs from Data Science and Data Analytics?"</p></div>
      <h6 onClick={handleFaq3}  onDoubleClick={handleCollapse}><AddIcon sx={{fontSize:30}}/></h6></div>
       <div class="faqcard_comp2_compressor"> {faq==4 &&(
<p>3.Data science partner like HData Systems can help your business to filter the best product or service to place in the market, who could be your target audience, which trend could be beneficial for your business and even which opportunities could be the best fit for your business as well. Apart from that, they can also help to recruit and train the most suitable talents for your business.</p>
)}</div>


      <div className={faq==5 ?"faqcard_comp_dark":"faqcard_comp"}><div><p>"What is Business Intelligence?"</p></div>
      <h6 onClick={handleFaq4}  onDoubleClick={handleCollapse}><AddIcon sx={{fontSize:30}}/></h6></div>

       <div class="faqcard_comp2_compressor"> {faq==5 &&(
<p>Big Data includes all the types and formats of data generated using various data sources. Where data science is a technical area that involves scientific programming tools and techniques to work on the data collected by Big data. HData Systems Data Analytics services implies the best suitable algorithm or mechanical procedure which can provide insights that can be helpful to make more informed decisions to boost your business.</p>
)}</div>


      <div className={faq==6 ?"faqcard_comp_dark":"faqcard_comp"}><div><p>"Who could be the best fit ot analyse my Data?"</p></div>
      <h6 onClick={handleFaq5}  onDoubleClick={handleCollapse}><AddIcon sx={{fontSize:30}}/></h6></div> 
  <div class="faqcard_comp2_compressor"> {faq==6 &&(
    <p>Hire the one who keeps your end goal in mind. Such as what functionality and insight can boost your business. Then, evaluate where your business rank when it comes to data maturity and what kind of procedure and outline your business needs to follow to meet your end goal with minimum errors. And lastly, what skillsets they will focus on in the procedure outline they have presented. Believe in the outcome they have already presented. HData Systems can be your go to choice for all your data analysis requirements.</p>
)}</div>


    </div>
  );
}

export default FaqCard;
