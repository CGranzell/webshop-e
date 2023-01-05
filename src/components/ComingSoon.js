import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchProduct } from '../API/Fetch';
import { device } from './MediaQueries';

import CardItem from './CardItem';

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
          <CardItem product={leftProduct} />
        </section>
        <section>
          <CardItem product={midProduct} />
        </section>
        <section>
          <CardItem product={rightProduct} />
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
      font-family: 'Montserrat', sans-serif;
      font-size: 2rem;
    }
  }
  // Media Queries
  @media ${device.tablet} {
    section {
      h4 {
        left: 12%;
        top: 5%;
        font-size: 1.2rem;
      }
    }
    @media ${device.mobileL} {
      height: 200px;
      section {
        h4 {
          font-size: 0.6rem;
        }
      }
    }
  }
  @media ${device.mobileS} {
    height: 130px;
  }
`;
