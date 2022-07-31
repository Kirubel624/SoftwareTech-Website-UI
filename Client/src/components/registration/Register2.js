import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import signup from "../assets/signup.jpg";
import { useState } from "react";
import api from '../../api/api'

const Container = styled.div`
width:100%;
height:100vh;
background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${signup}) ;

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
const Register = () => {
  
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(false);
      try {
        const res = await api.post("/users/signup", {
          username,
          email,
          password,
          passwordConfirm
        });
        res.data && window.location.replace("/login");
      } catch (err) {
        setError(true);
      }
    };
  return (
    <Container>
      <Wrapper>
          <Title>WELCOME BACK</Title>
          <Form onSubmit={handleSubmit}>
       <Label>   <label htmlFor="name">User Name</label> </Label>
              <Input type = 'text'
              onChange={(e) => setUsername(e.target.value)}
               />
       <Label><label htmlFor="email">Email</label> </Label> 
              <Input  type='email'
              onChange={(e) => setEmail(e.target.value)}
               />
              <Label><label htmlFor="password">Password</label> </Label> 
              <Input  type='password'
               onChange={(e) => setPassword(e.target.value)} 
               />
                <Input placeholder="confirm password" type="password" onChange={(e) => setPasswordConfirm(e.target.value)}  />
              <Button  type="submit">Sign-up</Button>
                  
          </Form>
      </Wrapper>
    </Container>
  )

}
export default Register