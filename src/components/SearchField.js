import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { fetchProducts } from "../API/Fetch";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { device } from "./MediaQueries";

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState(false);

  let navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setDisplayProducts(false);
    } else {
      e.target.placeholder = "";
    }
  };

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      return;
    } else {
      setDisplayProducts(false);
      navigate(`/searchresult/${searchTerm}`);
    }
  };

  const filteredItems = products.filter((value) => {
    if (searchTerm === "") {
      return null;
    } else if (
      value.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ) {
      return value;
    }
  });

  const onBlur = (e) => {
    e.target.placeholder = "Search...";
    e.target.value = "";
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Search..."
          onBlur={onBlur}
          onChange={(event) => {
            setDisplayProducts(true);
            setSearchTerm(event.target.value);
          }}
          ref={ref}
        />
        {displayProducts && (
          <SearchResult>
            {filteredItems.map((value, key) => {
              return (
                <StyledLink to={`/products/${value.id}`}>
                  <Wrapper key={key}>
                    <ProductImg>
                      <img src={value.image} alt="" />
                    </ProductImg>
                    <SearchItem>{value.title.substring(0, 50)}...</SearchItem>
                  </Wrapper>
                </StyledLink>
              );
            })}
          </SearchResult>
        )}

        <SearchButton type="submit">
          <BsSearch size="20px" />
        </SearchButton>
      </Form>
    </Container>
  );
};

export default SearchField;

const Container = styled.div`
  position: relative;
  background-color: #edeef7;
  width: 100vw;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.4rem;
  width: 40%;
  height: 3.3rem;
  border-radius: 14px;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  @media ${device.tablet} {
    height: 2.6rem;
  }
  @media ${device.mobileL} {
    height: 2rem;
  }
`;

const SearchResult = styled.div`
  width: 40%;
  position: absolute;
  border-radius: 14px;
  top: 100%;
  max-height: 30rem;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 1;
  background-color: white;
  @media ${device.tablet} {
    width: 38%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    background-color: lightgrey;
  }
`;

const ProductImg = styled.div`
  margin: 0 0.5rem;
  height: 2rem;
  width: 2rem;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  @media ${device.tablet} {
  }
`;

const SearchItem = styled.p`
  margin: 1rem 0.5rem;
  font-family: "Montserrat", sans-serif;
  color: black;
  height: 2rem;
  @media ${device.tablet} {
    font-size: 0.8rem;
  }
  @media ${device.mobileL} {
    font-size: 0.6rem;
  }
  @media ${device.mobileS} {
    font-size: 0.4rem;
  }
`;

const SearchButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  margin-left: -40px;
`;