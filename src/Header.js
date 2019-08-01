import React from 'react';
import styled from 'styled-components';
import logo from './header.png';

const Image = styled.img`
  width: 300px;
  height: 200px;
  padding: 10px 10px 10px 10px;
`;


const Image1 = styled.img`
  width: 100px;
  height: 50px;
`;

const TopHeader = styled.div`
  width: 2305px;
  height: 60px;
  border: solid 1px #cccccc;
  background-color: #cccccc;
  display:flex; 
  flex-direction:row;
`;

const TopLeftHeaderLogo = styled.div`
  width: 100px;
  height: 50px;
`;

const TopRightHeaderLogo = styled.div`
  width: 100px;
  height: 50px;
  text-align: right;
  right: 30px;
  position: absolute;
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

const Title = styled.p`
  position: absolute;
  text-align: center;
  right: 250px;
`;

function Header() {
  // Import result is the URL of your image
  return (
    <div>
    <TopHeader>
      <TopLeftHeaderLogo src={logo}>
        <Image1 src={logo} alt="Logo" /> 
      </TopLeftHeaderLogo>
      <SearchBox>Search...</SearchBox>
      <TopRightHeaderLogo src={logo}>
        <Image1 src={logo} alt="Logo" /> 
      </TopRightHeaderLogo>
    </TopHeader>
    <Image src={logo} alt="Logo" />
    <Title>We envision a world where every individual is a positive and passionate social changemaker.</Title>
    <TopHeader>
    </TopHeader>
    </div>
  );
}

export default Header;