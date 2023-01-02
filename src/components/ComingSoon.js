import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchProduct } from "../API/Fetch";
import { Link } from "react-router-dom";
import { device } from "./MediaQueries";

const ComingSoon = () => {
  const [leftProduct, setLeftProduct] = useState([]);
  const [midProduct, setMidProduct] = useState([]);
  const [rightProduct, setRightProduct] = useState([]);

  useEffect(() => {
    fetchProduct(setLeftProduct, 9);
    fetchProduct(setMidProduct, 10);
    fetchProduct(setRightProduct, 14);
  }, []);

  return (
    <Container>
      <Wrapper>
        <section>
          <h4>Coming Soon</h4>
          <StyledLink to={`/products/${leftProduct.id}`}>
            <ImgWrapper>
              <img src={leftProduct.image} alt="harddrive" />
            </ImgWrapper>
            <Description>
              <p>{leftProduct.title}</p>
            </Description>
            <Price>
              <p>$ {leftProduct.price}</p>
            </Price>
          </StyledLink>
        </section>
        <section>
          <StyledLink to={`/products/${midProduct.id}`}>
            <ImgWrapper>
              <img src={midProduct.image} alt="harddrive" />
            </ImgWrapper>
            <Description>
              <p>{midProduct.title}</p>
            </Description>
            <Price>
              <p>$ {midProduct.price}</p>
            </Price>
          </StyledLink>
        </section>
        <section>
          <StyledLink to={`/products/${midProduct.id}`}>
            <ImgWrapper>
              <img src={rightProduct.image} alt="harddrive" />
            </ImgWrapper>
            <Description>
              <p>{rightProduct.title}</p>
            </Description>
            <Price>
              <p>$ {rightProduct.price}</p>
            </Price>
          </StyledLink>
        </section>
      </Wrapper>
    </Container>
  );
};

export default ComingSoon;

const Container = styled.div`
  position: relative;
  height: 20rem;
  display: flex;
  justify-content: center;
  // Media Queries
  @media ${device.tablet} {
    height: 15rem;
  }
  @media ${device.mobileL} {
    height: 9rem;
  }
  @media ${device.mobileS} {
    height: 7rem;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: -2rem;
  height: 300px;
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.45) 0px -10px 20px -20px;
  background-color: white;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  section {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h4 {
      position: absolute;
      left: 10%;
      top: 1%;
      font-family: "Montserrat", sans-serif;
      font-size: 2rem;
    }
  }
  // Media Queries
  @media ${device.tablet} {
    section {
      h4 {
        left: 12%;
        top: 5%;
        font-size: 1.3rem;
      }
    }
    @media ${device.mobileL} {
      height: 200px;
      section {
        h4 {
          font-size: 0.9rem;
        }
      }
    }
  }
  @media ${device.mobileS} {
    height: 130px;
    section {
      h4 {
        font-size: 0.6rem;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  height: 60%;
  width: 70%;
  border-radius: 2rem;
  background-color: #edeef7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
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
    height: 50%;
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