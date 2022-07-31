import React from "react";
import styled from "styled-components";
import Login from '../login/Login'
import Logout from '../logout/Logout'
import { Navigate, Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import './acc.css'
const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  height: 43px;
  width: 120px;
  border-radius: 30px;
  background-color: #532AB8;
  margin-right: 10px;
  background-image: linear-gradient(to right, transparent 0%, #993BE2 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;

  /* &:hover {
    background-color: #00c9ff;
  } */

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  height: 43px;
  width: 120px;
  border-radius: 20px;
  background-color: #00c9ff;
  border: 2px solid #fff;
  background-image: linear-gradient(to right, transparent 0%, #3be286 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #00c9ff;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  const { user, dispatch } = useContext(Context);

  return (
    <AccessibilityContainer>
   
     
   {user ? (

      <Logout/>
          ):(       
            <div>
            <Link to ='/register'><RegisterButton >Register</RegisterButton></Link>
            <Link to ='/login'><LoginButton>Login</LoginButton></Link>
            </div>
          
        )}
     
      {/* <LoginButton>Login</LoginButton> */}
    </AccessibilityContainer>
      );
}
