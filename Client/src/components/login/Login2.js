import { render } from '@testing-library/react';
import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import styled from "styled-components";
// import login from "../assets/login.jpg";
// import signup from "./Signup"
import { useContext, useRef } from "react";

import { Context } from "../../context/Context";//fix this to the directory you have api in the one i sent you
// import { mobile } from "../responsive";

import { Link, useNavigate } from "react-router-dom";
import api from '../../api/api'//do the same for this


const Container = styled.div`
width:100%;
height:100vh;


background-size:cover;
background-repeat:no-repeat;

display:flex;
align-items:center;
justify-content:center;
`;

const Wrapper = styled.div`
width:25%;
padding:20px;
height:60%;
background-color:white;
`;

const Title = styled.h1`
font-size:24px;
font-weight:300;
text-align:center;
color:rgb(105,105,105);
`;

const Form = styled.form`
display:flex;
flex-wrap:wrap;
`;

const Input = styled.input`
flex:1;
min-width:48%;
margin:5px 20px 0px 0px;
padding:10px;
`;


const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:rgba(251, 150, 56, 0.984);
color:white;
cursor:pointer;
margin-bottom:15px;
`;
const Label = styled.label`
   
    color: grey;
  `
const A = styled.a`
color:black;
`
const Error = styled.span`
  color: red;
`;
const Login = (props) => {
    const userRef = useRef();
    const passwordRef = useRef();
    const navigate=useNavigate();
    const { dispatch, isFetching, error } = useContext(Context);
    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" });
        
        try {
          const res = await api.post("/users/login", {
            email: userRef.current.value,
            password: passwordRef.current.value,
          });
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          navigate('/');
      
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE" });
        }
      };
  return (
    <Container>
      <Wrapper>
          <Title>WELCOME BACK</Title>
          <Form onSubmit={handleClick}>
          {isFetching ? <h1>Loading... </h1> : error ? <h1>{error}</h1> : ""}
       <Label>   <label htmlFor="name">User Name</label> </Label>
              <Input type = 'text'
                placeholder="username"
               ref={userRef}
               />
       <Label><label htmlFor="password">Password</label> </Label> 
              <Input  type='password'
               placeholder="password"
               ref={passwordRef}
               />
             
              
              <Button type="submit">LOG-IN</Button>
              {error && <Error>Something went wrong...</Error>}
              <p>Don't have an account? <Link to='/register'>
                <A> <a>Sign Up</a> </A>
                  </Link></p>
          </Form>
      </Wrapper>
    </Container>
  )

}
export default Login