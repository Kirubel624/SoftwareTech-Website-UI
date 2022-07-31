import React from 'react';
import './infopage.css'
import Software from '../../assets/images/software.PNG'
import Topdev from '../../assets/images/topdev.PNG'
import Analytics from '../../assets/images/analytics.PNG'
import Below from '../../assets/images/bottomsoft.PNG'
import Below1 from '../../assets/images/bottomsoft1.PNG'
import CountUp from 'react-countup';
import AddIcon  from '@mui/icons-material/Add';
import PercentIcon from '@mui/icons-material/Percent';
const InfoPage = () => {
  return (
    <div className="soft_all_con">
    <div className="infopage_con">
    <div className="info_page">
      <p className="">The Reasons Why HData Stand Out</p>
<h1>HData Unfolds Solutions To</h1>
<h1>Everything</h1>
<h3></h3>
    </div>
    <div className="soft_con">
      <div className="soft_soft"><a href="https://topsoftwarecompanies.co/"><img src={Software}/></a></div>
      <div className="soft_soft2"><a href="https://topappdevelopmentcompanies.com/"><img src={Topdev}/></a></div>
      <div className="soft_soft1"><a href="https://appdevelopmentcompanies.co/top-10/big-data-analytics-companies"><img src={Analytics}/></a></div>
    </div>
    </div>
    <div className='soft_con_con_con'>
    <div className='soft_con_con'>
    <div className='soft_con1'>
<div className='soft_soft_1'>    <div className='soft_soft_1_con'><div><CountUp className="count_up" delay={2} end={10} /><AddIcon className='plus_icon'/></div><p>Years Of Experience</p></div></div>
    <div className='soft_soft_2'><div className='soft_soft_1_con'><div><CountUp className="count_up" delay={2} end={100} /><AddIcon className='plus_icon'/></div><p>Clients</p></div></div>
    <div className='soft_soft_3'><div className='soft_soft_1_con'><div><CountUp className="count_up" delay={2} end={97} /><PercentIcon className='percent_icon'/></div><p>Client Retention Rate</p></div></div>
    </div>
    <div className='soft_con2'>
    <div className='soft_soft_3_1'><div className='soft_soft_1_con'><div><CountUp className="count_up1" delay={2} end={40} /><AddIcon className='plus_icon1'/></div><p id="white_text">AI solutions</p></div></div>
    <div className='soft_soft_1_1'><div className='soft_soft_1_con'><div><CountUp className="count_up" delay={2} end={350} /><AddIcon className='plus_icon'/></div><p>Employees</p></div></div>
    <div className='soft_soft_2_1'><div className='soft_soft_1_con'><div><CountUp className="count_up" delay={2} end={20} /><AddIcon className='plus_icon'/></div><p>Countries</p></div></div>
    
    </div>
    <div className='soft_con3'>
    <div className='soft_soft_3_1_1'><div className='soft_soft_1_con'><div><CountUp className="count_up" delay={2} end={80} /><AddIcon className='plus_icon'/></div><p>Years Of Experience</p></div></div>
    <div className='soft_soft_1_1_1'><p id="small_par">Awarded as</p><p id="big_paragraph">Top Big Data Analytics & BI Consultant</p></div>
   
    
    </div>
    </div>
    <div className="below_image1"><img src={Below1}/></div>
    </div>
    {/* <div className="below_image"><img src={Below}/></div> */}
    </div>
  );
}

export default InfoPage;
