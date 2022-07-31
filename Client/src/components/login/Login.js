import { useState,   useEffect } from "react";
import styled from "styled-components";
import { useContext, useRef } from "react";

import { Context } from "../../context/Context";
// import { mobile } from "../responsive";
import { Navbar } from '../navbar/'

import { Link, useNavigate } from "react-router-dom";
import api from '../../api/api'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border-style: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Linka = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = (props) => {
  const userRef = useRef();
  const passwordRef = useRef();
  const navigate=useNavigate();
  const { dispatch, isFetching, error } = useContext(Context);
  const { user} = useContext(Context);

  const toastOption = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,

    // progress: undefined
  };
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
<Navbar/>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleClick}>
        {isFetching ? <h1>Loading... </h1> : error ? <h1>{error}</h1> : ""}
      <h1>Login</h1>
          <Input
            placeholder="username"
            type="text"
            ref={userRef}
          />
          <Input
            placeholder="password"
            type="password"
            ref={passwordRef}
          />
            {/* <Link to="/"> */}
              <Button type="submit" disabled={isFetching} variant="success">
            LOGIN
          </Button>
          {/* </Link> */}
          
          {error && <Error>Something went wrong...</Error>}
          <Linka>DO YOU NOT REMEMBER THE PASSWORD?</Linka>
          <Link to="/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
      <ToastContainer />
    </Container>
  );
};

export default Login;
