import React from 'react' ;
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logout from './Logout'
import { useContext, useRef } from "react";

import { Context } from "../../context/Context";
const styling={
    float: "left",
    color: "orange"
}
const stylings={
    float: "left",
    color: "gray"
}
function Navbar(){
    const { user} = useContext(Context);
    return(
        <div className="navbar">
    <div className='leftSide'>
        <h2 style={styling}>ADDIS</h2>
        <h2 style={stylings}>SOFTWARE</h2>
    </div>
    <div className='rightSide'>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="carrers">Carrers</Link>
    <Link to="/contactus">Contact Us</Link>
   {user?<Logout/>: <Link to="/login">Log In</Link>}
   
    
      
        </div>
    </div>
    )
}
export default Navbar; 