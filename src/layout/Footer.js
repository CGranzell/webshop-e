import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaCopyright,
} from "react-icons/fa";
import { device } from "../components/MediaQueries";

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
          <FaInstagram size="30px" />
          <FaFacebook size="30px" />
          <FaYoutube size="30px" />
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
  justify-content: space-around;
`;

const WrapperLinks = styled.div`
  height: 100%;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
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
      font-size: 0.7rem;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  width: 50%;
  height: 2rem;
  justify-content: space-around;
`;
const Copyright = styled.div`
  display: flex;
`;