import React from "react";
import styled from "styled-components";
import HDataSystemslogo from "../../assets/images/hdatalogo.PNG";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: black;
`;

const LogoImg = styled.div`
padding-top: 10px;
  width: 150px;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;


export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={HDataSystemslogo} alt="Greenland logo" />
      </LogoImg>
     
    </LogoWrapper>
  );
}
