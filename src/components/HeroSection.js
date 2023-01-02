import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchProduct } from "../API/Fetch";
import { Link } from "react-router-dom";
import { device } from "../components/MediaQueries";

const HeroSection = () => {
  const [heroProduct, setHeroProduct] = useState([]);

  useEffect(() => {
    fetchProduct(setHeroProduct, 13);
  }, []);

  return (
    <Container>
      <Wrapper>
        <WrapperText>
          <h3>Super Luxury</h3>
          <h3>Smart Tv</h3>
          <p>{heroProduct.title}</p>
          <ExploreButton to={`/products/${heroProduct.id}`}>
            Explore Now
          </ExploreButton>
        </WrapperText>
      </Wrapper>
      <Wrapper>
        <WrapperImg>
          <ImgContainer>
            <BuyNow>
              <p>BUY NOW</p>
            </BuyNow>
            <img src={heroProduct.image} alt="tv" />
            <Info>
              <p>Full HD</p>
            </Info>
          </ImgContainer>
        </WrapperImg>
      </Wrapper>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  height: 600px;
  width: 100vw;
  background-color: #edeef7;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  // Media Queries
  @media ${device.tablet} {
    height: 450px;
  }
  @media ${device.mobileL} {
    height: 300px;
  }
  @media ${device.mobileS} {
    height: 250px;
  }
`;

const Wrapper = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
`;

const WrapperText = styled.div`
  position: relative;
  top: 14%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3,
  p,
  button {
    margin-top: 1rem;
    font-family: "Montserrat", sans-serif;
  }
  h3 {
    font-size: 5rem;
  }
  // Media Queries
  @media ${device.tablet} {
    h3 {
      font-size: 3rem;
    }
  }
  @media ${device.mobileL} {
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
  @media ${device.mobileS} {
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.4rem;
    }
  }
`;

const WrapperImg = styled.div`
  position: relative;
  left: 10%;
  top: 10%;
  height: 400px;
  width: 80%;
  border-radius: 12px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  // Media Queries
  @media ${device.tablet} {
    height: 300px;
  }
  @media ${device.mobileL} {
    height: 200px;
  }
  @media ${device.mobileS} {
    height: 150px;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  width: 70%;
  height: 70%;
  justify-content: center;
  align-items: center;
  // Media Queries
  @media ${device.tablet} {
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const BuyNow = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #edeef7;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  p {
    font-size: 1.2rem;
    font-family: "Fuzzy Bubbles", cursive;
  }
  // Media Queries
  @media ${device.tablet} {
    width: 60px;
    height: 60px;
    p {
      font-size: 0.7rem;
    }
  }
  @media ${device.mobileL} {
    width: 40px;
    height: 40px;
    p {
      font-size: 0.4rem;
    }
  }
  @media ${device.mobileS} {
    width: 30px;
    height: 30px;
    p {
      font-size: 0.3rem;
    }
  }
`;

const Info = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 8rem;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #edeef7;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  p {
    font-size: 1.1rem;
    font-family: "Fuzzy Bubbles", cursive;
  }
  // Media Queries
  @media ${device.tablet} {
    width: 80px;
    bottom: 4.3rem;
    p {
      font-size: 0.8rem;
    }
  }
  @media ${device.mobileL} {
    width: 60px;
    bottom: 3rem;
    p {
      font-size: 0.5rem;
    }
  }
  @media ${device.mobileS} {
    height: 20px;
    width: 40px;
    bottom: 2.9rem;
    p {
      font-size: 0.4rem;
    }
  }
`;

const ExploreButton = styled(Link)`
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
    font-size: 1.1rem;
  }
  // Media Queries
  @media ${device.tablet} {
    height: 2rem;
    width: 8rem;
    font-size: 0.8rem;
  }
  @media ${device.mobileS} {
    height: 1rem;
    width: 6rem;
    font-size: 0.4rem;
  }
`;