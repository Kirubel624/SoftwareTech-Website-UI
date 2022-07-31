import React from 'react'
import './faq.css'
import FAQ from '../../assets/images/faq.jpg'
import FaqCard from './FaqCard'
import { useState } from 'react'
const Faq = () => {
  const [faq,setFaq]=useState(0);
  return (
    <div className="faq_all_con">
      <div className="faq_left_side_con">
      <div className="faq_page_top">
          <p className="">FAQs</p>
<h1>Most Common Answer And Question</h1>
<h3></h3>
</div>
<div className="faq_card_con_left">
        <FaqCard/>
        </div></div>
<div className="faq_card_all_con">
      
        {/* <div className="faq_card_con_left">
        <FaqCard /></div>
        <div className="faq_card_con_left">
        <FaqCard/></div>
        <div className="faq_card_con_left">
        <FaqCard/></div>
        <div className="faq_card_con_left">
        <FaqCard/></div> */}
<div className="faq_card_con_right_gray_bg"></div>
      <div className="faq_card_con_right"><img src={FAQ}/></div>
      </div>
    </div>
  )
}

export default Faq
