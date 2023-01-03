import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import  { FaShopware } from 'react-icons/fa'

const Logo = () => {
  return (
    <WrapperLogo>
        <NavLinks to="/"><FaShopware size="50px"/></NavLinks>
          <WrapperText>
            <p>Jewelry</p>
            <p>Clothes</p>
            <p>Electronics</p>
          </WrapperText>
      </WrapperLogo>
  )
}

export default Logo

const NavLinks = styled(NavLink)`
text-decoration: none;
color: black;
cursor: pointer;
  &:hover {
    color: #c58764;
  }
`

const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  align-items: center;
`

const WrapperText = styled.div`
display: flex;
font-size: 0.4rem;
cursor: pointer;
    p {
      margin-left: 1rem;
    }
`