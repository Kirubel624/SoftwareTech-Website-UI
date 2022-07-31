import React from 'react';
import Blogpic from '../../assets/images/1649883947.jpg'
import Profile from '../../assets/images/harnil.jpg'
import './blogcard.css'
const Blogcard = (props) => {
  return (
    <div className="blogcard_top_pic">
      <div className="top_blog_pic"><img src={props.Blogpic}/></div>
      <div className="top_blog_pic_purple_overlay"><button>Read More</button> </div>
      <div>
<div>
    <div className="blog_prof">
      <div className="profile_pic">
        <img src={Profile} className=""/> </div><div className="profile_name"><p id="h_oza">Harnil Oza</p></div>
    <div className='machine_l'>Machine Learning</div></div>
    <div><p>Benefits Of Machine Learning In Education</p></div>
    <div className="date_like"><div className='like_date_lower'>
     133</div><div className='like_date_lower1'>April 14, 2022</div></div>
</div>
<div></div>
      </div>
    </div>
  );
}

export default Blogcard;
