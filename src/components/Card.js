import React from "react";
import styled from "styled-components";
import { device } from "./MediaQueries";
import { Link } from "react-router-dom";

const Card = ({ product, products, displayProducts }) => {
  return (
    <>
    {displayProducts && (
      products.map((product) => {
        return (
          <Product to={`/products/${product.id}`} key={product.id}>
            <Img>
              <img src={product.image} alt={product.title} />
            </Img>

            <Title>
              <p>{product.title.substring(0, 40)}...</p>
            </Title>
            <Price>
              <p>$ {product.price}</p>
            </Price>
          </Product>
        );
      })
    )}
    {!displayProducts && (
      product.map((product) => {
        return (
          <Product to={`/products/${product.id}`} key={product.id}>
            <Img>
              <img src={product.image} alt={product.title} />
            </Img>

            <Title>
              <p>{product.title.substring(0, 40)}...</p>
            </Title>
            <Price>
              <p>$ {product.price}</p>
            </Price>
          </Product>
        );
      })
    )}
     
    </>
  );
};

export default Card;

const Product = styled(Link)`
  height: 300px;
  width: 80%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  /* border-radius: 10px; */
  //Media Queries
  @media ${device.tablet} {
    height: 250px;
  }
  @media ${device.mobileL} {
    height: 150px;
  }
  @media ${device.mobileM} {
    height: 100px;
  }
`;

const Img = styled.div`
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
  //Media Queries
  @media ${device.laptop} {
    width: 100px;
    height: 100px;
  }
  @media ${device.tablet} {
    width: 60px;
    height: 60px;
  }
  @media ${device.mobileL} {
    width: 40px;
    height: 40px;
  }
  @media ${device.mobileM} {
    width: 30px;
    height: 30px;
  }
`;

const Title = styled.div`
  color: black;
  p {
    font-size: 1.3rem;
  }
  //Media Queries
  @media ${device.tablet} {
    p {
      font-size: 0.8rem;
    }
  }
  @media ${device.mobileL} {
    p {
      font-size: 0.6rem;
    }
  }
  @media ${device.mobileM} {
    p {
      font-size: 0.4rem;
    }
  }
`;

const Price = styled.div`
  color: black;
  p {
    font-size: 1.3rem;
  }
  //Media Queries
  @media ${device.tablet} {
    p {
      font-size: 0.8rem;
    }
  }
  @media ${device.mobileL} {
    p {
      font-size: 0.6rem;
    }
  }
  @media ${device.mobileM} {
    p {
      font-size: 0.5rem;
    }
  }
`;