import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../API/Fetch";
import styled from "styled-components";
import ShopContext from "../context/ShopContext";
import { device  } from "../components/MediaQueries";

const Product = () => {
  const [product, setProduct] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetchProduct(setProduct, params.productId);
  }, [params.productId]);

  return (
    <ShopContext.Consumer>
      {(context) => (
        <Container>
          <WrapperTitle>
            <Title>{product.title}</Title>
          </WrapperTitle>
          <WrapperProduct>
            <WrapperImg>
              <Img>
                <img src={product.image} alt="" />
              </Img>
            </WrapperImg>
            <WrapperPrice>
              <Price>
                <h3>$ {product.price}</h3>
                <hr />
                <p>
                  Rating{" "}
                  {product ? product.rating && product.rating.rate : null} / 5
                </p>
                <hr />
                <p>
                  ({product ? product.rating && product.rating.count : null}{" "}
                  reviews)
                </p>
                <hr />
                <AddToCartButton
                  onClick={context.addProductToCart.bind(this, product)}
                >
                  Add To Cart
                </AddToCartButton>
              </Price>
            </WrapperPrice>
          </WrapperProduct>
          <WrapperAbout>
            <h3>About the Product</h3>
            <About>{product.description}</About>
          </WrapperAbout>
        </Container>
      )}
    </ShopContext.Consumer>
  );
};

export default Product;

const Container = styled.div`
  background-color: #edeef7;
`;

const WrapperTitle = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  margin-left: 3rem;
  font-family: "Montserrat", sans-serif;
  //Media Queries
  @media ${device.mobileL} {
    margin-left: 0rem;
    font-size: 1rem;
  }
`;

const WrapperProduct = styled.div`
  height: 30rem;
  width: 100%;
  display: flex;
  //Media Queries
  @media ${device.tablet} {
    height: 25rem;
  }
  @media ${device.mobileL} {
    height: 12rem;
  }
`;

const WrapperImg = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.div`
  height: 80%;
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: contain;
    width: 90%;
    height: 90%;
  }  
  @media ${device.mobileL} {
    border-radius: 0;
  }
`;

const WrapperPrice = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Price = styled.div`
  background-color: white;
  border-radius: 12px;
  height: 80%;
  width: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h3 {
    font-size: 3rem;
  }
  hr {
    width: 50%;
    height: 4px;
    background-color: black;
  }
  p {
    font-size: 1.4rem;
  }
  //Media Queries
  @media ${device.tablet} {
    h3 {
      font-size: 1.8rem;
    }
    p{
      font-size: 1rem;
    }
  }
  @media ${device.mobileL} {
    justify-content: space-evenly;
    border-radius: 0;
    h3 {
    font-size: 1rem;
  }
  hr {
    height: 3px;

  }
  p {
    font-size: 0.5rem;
  }
  }
`;

const WrapperAbout = styled.div`
  background-color: white;
  height: 20rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  h3 {
    font-size: 3rem;
  }
  //Media Queries
  @media ${device.tablet} {
    h3 {
      font-size: 2rem;
    }
  }
  @media ${device.mobileL} {
    h3 {
      font-size: 1.2rem;
    }
  }
`;

const About = styled.p`
  width: 80%;
  line-height: 2rem;
  //Media Queries
  @media ${device.mobileL} {
    line-height: 1.4rem;
    font-size: 0.5rem;
  }
`;

const AddToCartButton = styled.button`
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