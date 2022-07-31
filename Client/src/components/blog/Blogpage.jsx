import React from 'react';
import Blogcard from './Blogcard';
import './blogpage.css'
import Blogpic from '../../assets/images/1649883947.jpg'
import Blogpic2 from '../../assets/images/blog2.jpg'
import Blogpic3 from '../../assets/images/blog3.jpg'
const Blogpage = () => {
  return (
    <div className="blogpage_all_con">
      <div className="blog_page_left_right_con">
      <div className="blog_page_left_title">
      <p className="">Blogs</p>
<h1>Latest Blogs</h1>
<h3></h3>
      </div>
      <div className="blog_page_right_button"><button>View All</button></div>
      </div>
      <div className="blog_page_container">
   <div className="blog_page_container_compressor"> <Blogcard Blogpic={Blogpic}/><Blogcard Blogpic={Blogpic2}/>   <Blogcard Blogpic={Blogpic3}/></div>
      
   
      </div>
    </div>
  );
}

export default Blogpage;
