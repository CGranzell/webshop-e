import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import { device } from "../components/MediaQueries";
import { FaShoppingCart } from 'react-icons/fa'

const Header = (props) => {
  const [showHamburger, setShowHamburger] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleHamburger = () => {
    setShowHamburger((prev) => !prev);
    setShowHamburgerMenu((prev) => !prev);
  };

  return (
    <Nav>
      <ul>
        <Logo />

        {showHamburger && (
          <>
            {showHamburgerMenu && (
              <HamburgerMenuActive>
                <HamburgerNavLinks to="/" onClick={handleHamburger}>
                  Home
                </HamburgerNavLinks>
                <HamburgerNavLinks to="/products" onClick={handleHamburger}>
                  Products
                </HamburgerNavLinks>
              </HamburgerMenuActive>
            )}
            <HamburgerMenu>
              <HamburgerNavLinks to="/">Home</HamburgerNavLinks>
              <HamburgerNavLinks to="/products">Products</HamburgerNavLinks>
            </HamburgerMenu>
          </>
        )}

        <NavLinks to="/">Home</NavLinks>
        <NavLinks to="/products">Products</NavLinks>

        <Hamburger onClick={handleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <NavLinksCart to="/cart"><FaShoppingCart /> ({props.cartItemNumber})</NavLinksCart>
      </ul>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 5rem;
  width: 100vw;
  background-color: #edeef7;
  font-family: "Montserrat", sans-serif;
  display: flex;
  ul {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    color: #c58764;
  }
  //Media Queries
  @media ${device.tablet} {
    display: none;
  }
`;
const NavLinksCart = styled(NavLink)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    color: #c58764;
  }
`;
const HamburgerNavLinks = styled(NavLink)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    color: #c58764;
  }
`;

const Hamburger = styled.div`
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  display: none;
  span {
    border: 1px solid black;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: black;
    color: black;
  }
  //Media Queries
  @media ${device.tablet} {
    display: flex;
  }
`;
const HamburgerMenu = styled.div`
  position: fixed;
  left: -100%;
`;
const HamburgerMenuActive = styled.div`
  height: 10rem;
  border: 2px solid black;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  left: 0;
  top: 80px;
  flex-direction: column;
  background-color: beige;
  width: 100%;
  z-index: 1;
`;