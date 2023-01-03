import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchProduct } from "../API/Fetch";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { device } from "./MediaQueries";

const ProductSlider = () => {
  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [product3, setProduct3] = useState([]);
  const [product4, setProduct4] = useState([]);
  const [product5, setProduct5] = useState([]);
  const [product6, setProduct6] = useState([]);

  const images = [
    {
      id: product1.id,
      src: product1.image,
      alt: product1.alt,
    },

    {
      id: product2.id,
      src: product2.image,
      alt: product2.alt,
    },
    {
      id: product3.id,
      src: product3.image,
      alt: product3.alt,
    },
    {
      id: product4.id,
      src: product4.image,
      alt: product4.alt,
    },
    {
      id: product5.id,
      src: product5.image,
      alt: product5.alt,
    },
    {
      id: product6.id,
      src: product6.image,
      alt: product6.alt,
    },
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchProduct(setProduct1, 9);
    fetchProduct(setProduct2, 10);
    fetchProduct(setProduct3, 11);
    fetchProduct(setProduct4, 12);
    fetchProduct(setProduct5, 13);
    fetchProduct(setProduct6, 14);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === images.length - 1) {
        setCount(0);
      } else {
        setCount((prevNumber) => prevNumber + 1);
      }
    }, 7000);

    return () => clearInterval(intervalId);
  }, [count, images.length]);

  const prevImg = () => {
    setCount((prevNumber) => prevNumber - 1);
    if (count <= 0) {
      setCount(images.length - 1);
    }
  };
  const nextImg = () => {
    setCount((prevNumber) => prevNumber + 1);
    if (count === images.length - 1) {
      setCount(0);
    }
  };

  return (
    <Container>
      <h3>Popular Products</h3>
      <StyledArrow onClick={prevImg}>
        <SlArrowLeft />
      </StyledArrow>
      <Wrapper>
        <StyledLink to={`/products/${images[count].id}`}>
          <ImgWrapper>
            <img src={images[count].src} alt={images[count].alt} />
          </ImgWrapper>
        </StyledLink>
      </Wrapper>
      <StyledArrow onClick={nextImg}>
        <SlArrowRight />
      </StyledArrow>
    </Container>
  );
};

export default ProductSlider;

const Container = styled.div`
  position: relative;
  height: 30rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    position: absolute;
    left: 10%;
    top: 1%;
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
  }
  // Media Queries
  @media ${device.tablet} {
    height: 20rem;
    h3 {
      top: 3rem;
      font-size: 1.3rem;
    }
  }
  @media ${device.mobileL} {
    height: 19rem;
  }
  @media ${device.mobileS} {
    height: 15rem;
    h3 {
      font-size: 0.8rem;
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 10rem;
  height: 100%;
  width: 50%;
  // Media Queries
  @media ${device.tablet} {
    margin-top: 1rem;
    height: 50%;
  }
  @media ${device.mobileS} {
    height: 40%;
  }
`;

const StyledLink = styled(Link)`
  transition: 0.2s ease-in-out;
  display: flex;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  img {
    object-fit: contain;
    height: 20rem;
    width: 20rem;
    cursor: pointer;
  }
  // Media Queries
  @media ${device.tablet} {
    img {
      height: 10rem;
      width: 10rem;
    }
  }
  @media ${device.mobileS} {
    img {
      height: 8rem;
      width: 8rem;
    }
  }
`;

const StyledArrow = styled.button`
  font-size: 6rem;
  background-color: white;
  border: none;
  &:hover {
    cursor: pointer;
    color: #a44d5f;
    transform: scale(1.25);
  }
  // Media Queries
  @media ${device.tablet} {
    font-size: 4rem;
  }
  @media ${device.mobileS} {
    font-size: 3rem;
  }
`;