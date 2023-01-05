import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from './MediaQueries';

const CardItem = ({ product }) => {
  return (
    <StyledLink to={`/products/${product.id}`}>
      <ImgWrapper>
        <img src={product.image} alt="harddrive" />
      </ImgWrapper>
      <Description>
        <p>{product.title}</p>
      </Description>
      <Price>
        <p>$ {product.price}</p>
      </Price>
    </StyledLink>
  );
};

export default CardItem;

const StyledLink = styled(Link)`
  height: 60%;
  width: 70%;
  border-radius: 2rem;
  background-color: #edeef7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  &:hover {
    transform: scale(1.25);
    font-size: 1.1rem;
  }
  // Media Queries
  @media ${device.tablet} {
    height: 45%;
    border-radius: 0;
    
  }
  @media ${device.mobileS} {
    height: 70%;
  }
`;

const ImgWrapper = styled.div`
  img {
    object-fit: contain;
    height: 4rem;
    width: 4rem;
  }
  @media ${device.mobileL} {
    img {
      height: 2rem;
      width: 2rem;
    }
  }
  @media ${device.mobileS} {
    img {
      height: 1.7rem;
      width: 1.7rem;
    }
  }
`;

const Description = styled.div`
  p {
    font-size: 0.8rem;
    margin-left: 5%;
  }
  // Media Queries
  @media ${device.tablet} {
    p {
      font-size: 0.5rem;
    }
  }
  @media ${device.mobileL} {
    p {
      font-size: 0.3rem;
    }
  }
  @media ${device.mobileS} {
    p {
      font-size: 0.2rem;
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  p {
    font-size: 1.7rem;
    color: red;
  }
  // Media Queries
  @media ${device.tablet} {
    p {
      font-size: 1rem;
    }
  }
  @media ${device.mobileL} {
    p {
      font-size: 0.5rem;
    }
  }
`;
