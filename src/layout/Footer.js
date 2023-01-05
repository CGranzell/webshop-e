import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaCopyright,
} from 'react-icons/fa';
import { device } from '../components/MediaQueries';

const Footer = () => {
  return (
    <Container>
      <WrapperLinks>
        <Links to="/">Home</Links>
        <Links to="/products">Products</Links>
      </WrapperLinks>
      <WrapperLogo>
        <Logo />
        <Copyright>
          <FaCopyright size="10px" />
          <p>Christoffer Granzell 2022</p>
        </Copyright>
      </WrapperLogo>
      <WrapperSocial>
        <div>
          <p>Connect</p>
        </div>
        <Icons>
          <FaInstagram size="20px" />
          <FaFacebook size="20px" />
          <FaYoutube size="20px" />
        </Icons>
      </WrapperSocial>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 10rem;
  width: 100vw;
  background-color: #9a9998;
  display: flex;
  justify-content: space-evenly;
  //Media Queries
  @media ${device.mobileL} {
  }
`;

const WrapperLinks = styled.div`
  height: 100%;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  //Media Queries
  @media ${device.mobileL} {
    justify-content: space-evenly;
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #c58764;
  }
  //Media Queries
  @media ${device.mobileL} {
    font-size: 0.7rem;
  }
`;

const WrapperLogo = styled.div`
  height: 100%;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  //Media Queries
  @media ${device.mobileL} {
    font-size: 0.7rem;
  }
`;
const WrapperSocial = styled.div`
  height: 100%;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  p {
    font-size: 1.5rem;
  }
  //Media Queries
  @media ${device.mobileL} {
    p {
      height: 80%;
      font-size: 0.7rem;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  width: 8rem;
  height: 2rem;
  justify-content: space-evenly;

  //Media Queries
  @media ${device.mobileL} {
    width: 5rem;
  }
`;
const Copyright = styled.div`
  display: flex;
  //Media Queries
  @media ${device.mobileL} {
    font-size: 0.5rem;
  }
`;
