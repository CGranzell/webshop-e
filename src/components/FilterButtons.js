import React from "react";
import styled from "styled-components";
import { device } from "./MediaQueries";

const FilterButtons = ({
  filterItem,
  setProduct,
  menuItems,
  products,
  setDisplayProducts,
}) => {

  return (
    <>
      {menuItems.map((val, id) => {
        return (
          <Btn
            onClick={() => {
              setDisplayProducts(false);
              filterItem(val);
            }}
            key={id}
          >
            {val.charAt(0).toUpperCase() + val.slice(1)}
          </Btn>
        );
      })}
      <Btn onClick={() => setProduct(products)}>All</Btn>
    </>
  );
};

export default FilterButtons;

const Btn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c58764;
  height: 2.5rem;
  width: 9rem;
  border: none;
  border-radius: 14px;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transform: scale(1.25);
    font-size: 1rem;
  }
  //Media Queries
  @media ${device.tablet} {
    height: 2rem;
    width: 7rem;
    font-size: 0.7rem;
  }
  @media ${device.mobileL} {
    height: 1.5rem;
    width: 5rem;
    font-size: 0.5rem;
  }
  @media ${device.mobileM} {
    width: 4.5rem;
    font-size: 0.4rem;
  }
`;