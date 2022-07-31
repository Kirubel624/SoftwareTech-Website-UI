import React from 'react'
import './processpage.css'
import Whychoose from '../../assets/images/why-choose.jpg'
import DS from '../../assets/images/DS.PNG'
import Processf from './Processf'
const Process = () => {
  const ServiceCardSmall =(props)=>{
    return(
    <div className="serv_con1">
        <div className="service_card1">
         {/* <img src={DS } className="top1" /> */}
         <h4 className="top1">{props.name}</h4>
         <p className="top1">{props.info}</p>
                
        <div
        className="overlaydiv1">
           
        </div>
        <div className="white_text_overlay1">
        <img src={DS } className="" />
        
        </div>
        
        </div>
    </div>
    )
}
  return (
    <div className="all_ci">
      <div className="process_page">
        <div className="process_page_left">
      <p className="">Why Choose</p>
<h1>Why HData Systems?</h1>
<h3></h3>
<p>We let the businesses obtain insight data they require to analyze 
  and help them to make data-driven strategies and accomplish their business goals 
  with scalable and reliable analysis. Whatever your business is- we will provide 
  you trustworthy data which will help your company to make informed decisions 
  and be ahead in this competitive market. To become the best data-driven organisation
   with faster unique insights by applying Data Science and Artificial Intelligence. 
   Our team always engaged with unique innovation, implementing seamless result, and 
   turn your business into data-driven organisations</p>
   </div>
   <div className="process_page_right">
     <img src={Whychoose}/>
   </div>
   
</div>
<div className="overlayer_new">

<Processf/>


</div>

    </div>
  )
}

export default Process
