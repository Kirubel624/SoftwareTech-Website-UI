import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import './logout.css'
import styled from "styled-components";

const Logout = () => {
  const [username, setUsername] = useState("");
  const { user, dispatch } = useContext(Context);
  console.log(user)
  
    const handleLogout=()=>{
    
      dispatch({ type: "LOGOUT" });
    };
  return (
      
    <div className='logout_c'>
      <h5 id="username_logout">Welcome,{user.data.username}
      
         
     </h5>
     <NavLink className="logout" onClick={handleLogout}
          to={"/login"}>Logout</NavLink>
    </div>
  );
}

export default Logout;
