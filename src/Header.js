import React from 'react';
import styled from 'styled-components';
import logo from './header.png';

console.log(logo); // /logo.84287d09.png

const Image = styled.img`
  width: 300px;
  height: 200px;
  padding: 10px 10px 10px 10px;
`;

const TopHeader = styled.div`
  width: 2305px;
  height: 60px;
  border: solid 1px #cccccc;
  background-color: #cccccc;
  display:flex; 
  flex-direction:row;
`;

const TopHeaderLogo = styled.p`
  width: 230px;
  height: 50px;
  opacity: 0.49;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 10px 3px rgba(0, 0, 0, 0.5);
  font-family: Kokonor;
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 2px;
  text-align: left;
  padding: 10px 10px 10px 10px;
  color: #b620e0;
`;

const TopHeaderCircle = styled.p`
  position: absolute;
  background: #b620e0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  margin-top: 12px;
  right: 30px;
`;

const SearchBox = styled.div`
  width: 250px;
  height: 30px;
  border-radius: 45px;
  border: solid 1px #979797;
  background-color: #ffffff;  
  position: absolute;
  text-align: left;
  margin-top: 12px;
  right: 250px;
`;

function Header() {
  // Import result is the URL of your image
  return (
    <div>
    <TopHeader>
      <TopHeaderLogo>SOCH</TopHeaderLogo>
      <TopHeaderCircle>S</TopHeaderCircle>
      <SearchBox>Search...</SearchBox>
    </TopHeader>
    <Image src={logo} alt="Logo" /> 
    <Image src={logo} alt="Logo" /> 
    <Image src={logo} alt="Logo" /> 
    <Image src={logo} alt="Logo" /> 
    <TopHeader>
    </TopHeader>
    </div>
  );
}

export default Header;