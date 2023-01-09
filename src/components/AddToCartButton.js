import React from 'react'
import styled from 'styled-components'
import { device } from './MediaQueries'

const AddToCartButton = ({ onClick}) => {
  return (
    <Button onClick={onClick}>Add To Cart</Button>
  )
}

export default AddToCartButton



const Button = styled.button`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c58764;
  height: 3rem;
  width: 9rem;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transform: scale(1.25);
  }
  //Media Queries
  @media ${device.tablet} {
    height: 2.5rem;
    width: 7rem;
    font-size: 0.7rem;
    &:hover {
    transform: scale(1);
  }
  }
  @media ${device.mobileL} {
    height: 1.5rem;
    width: 3rem;
    border-radius: 8px;
    font-size: 0.3rem;
  }
`;