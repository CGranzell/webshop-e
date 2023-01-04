import React, { useState, useEffect } from "react";
import { fetchProducts } from "../API/Fetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchField from "../components/SearchField";

const SearchResult = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);
  const params = useParams();

  const filteredItems = products.filter((item) => {
    if (item.title.toLocaleLowerCase().includes(params.searchTerm)) {
      return item;
    }
  });

  return (
    <React.Fragment>
      <SearchField />
      <Container>
        <WrapperResult>
          <h2>SearchWord </h2>
          <SearchTerm> ({params.searchTerm}) </SearchTerm>
          <h2> gave {filteredItems.length} results </h2>
        </WrapperResult>

        <WrapperProducts>
          {filteredItems.map((item, key) => {
            return (
              <Product to={`/products/${item.id}`} key={key}>
                <Img>
                  <img src={item.image} alt="" />
                </Img>
                <Title>
                  <p>{item.title.substring(0, 40)}...</p>
                </Title>
                <Price>
                  <p>{item.price} $</p>
                </Price>
              </Product>
            );
          })}
        </WrapperProducts>
      </Container>
    </React.Fragment>
  );
};

export default SearchResult;

const Container = styled.div`
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  background-color: #edeef7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperResult = styled.div`
  height: 10rem;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchTerm = styled.h2`
  color: #a44d5f;
  margin: 0 1rem;
`;

const WrapperProducts = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  row-gap: 50px;
  column-gap: 20px;
`;

const Product = styled(Link)`
  height: 300px;
  width: 200px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
`;

const Img = styled.div`
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  color: black;
  p {
    font-size: 1.3rem;
  }
`;

const Price = styled.div`
  color: black;
  p {
    font-size: 1.3rem;
  }
`;