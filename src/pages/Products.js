import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchProducts } from "../API/Fetch";
import { device } from "../components/MediaQueries";
import FilterButtons from "../components/FilterButtons";
import Card from "../components/Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(products);
  const [displayProducts, setDisplayProducts] = useState(true);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  const menuItems = [...new Set(products.map((product) => product.category))];

  const filterItem = (val) => {
    const newProduct = products.filter((newVal) => {
      return newVal.category === val;
    });
    setProduct(newProduct);
  };

  return (
    <React.Fragment>
      <WrapperText>
        <h2>Available Products</h2>
      </WrapperText>
      <WrapperBtns>
        <FilterButtons
          filterItem={filterItem}
          setProduct={setProduct}
          menuItems={menuItems}
          products={products}
          setDisplayProducts={setDisplayProducts}
        />
      </WrapperBtns>
      <ContainerProducts>
        <WrapperProducts>
        {displayProducts && (
            <Card products={products}
              displayProducts={displayProducts}
            />

        )}
        {!displayProducts && (
            <Card product={product}
              displayProducts={displayProducts}
            />

        )}
        </WrapperProducts>
      </ContainerProducts>
    </React.Fragment>
  );
};

export default Products;

const WrapperText = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  background-color: #edeef7;
  h2 {
    font-size: 3rem;
  }
  //Media Queries
  @media ${device.tablet} {
    h2 {
      font-size: 2rem;
    }
  }
  @media ${device.mobileS} {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const WrapperBtns = styled.div`
  height: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: #edeef7;
  //Media Queries
  @media ${device.tablet} {
  }
`;

const ContainerProducts = styled.div`
  display: flex;
  justify-content: center;
  margin: 6rem 0;
  //Media Queries
  @media ${device.tablet} {
  }
`;

const WrapperProducts = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  row-gap: 50px;
  column-gap: 20px;
  //Media Queries
  @media ${device.tablet} {
  }
`;