import React, { useState, useContext } from "react";
import ShopContext from "../context/ShopContext";
import styled from "styled-components";
import Input from "../components/Input";
import { device } from "../components/MediaQueries";

function CartPage() {
  const context = useContext(ShopContext);

  const [valid, setValid] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  let initialValueAmount = 0;
  let amount = 0;
  let amountArray = [];

  const initialValuetotalSum = 0;
  let totalSum = 0;
  let totalSumArray = [];

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    adress: "",
    phone: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.adress &&
      values.phone
    ) {
      setValid(true);
    }
    setSubmitted(true);
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      adress: "",
      phone: "",
    });
  };

  const handleFirstName = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastName = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleAdress = (event) => {
    setValues({ ...values, adress: event.target.value });
  };

  const handlePhone = (event) => {
    setValues({ ...values, phone: event.target.value });
  };

  //   const handleChange = (e) => {
  //     setValues(prev =>({...prev, [e.target.name]:e.target.value}))
  // }

  return (
    <React.Fragment>
      <WrapperCart>
        <Cart>
          <h1>Cart</h1>

          {context.cart.length <= 0 && (
            <EmptyCart>
              <p>No Item in the Cart!</p>
            </EmptyCart>
          )}
          {context.cart.length > 0 && (
            <>
              <WrapperProducts>
                <Table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  {context.cart.map((cartItem) => {
                    amountArray.push(cartItem.price * cartItem.quantity);
                    amount = amountArray.reduce(
                      (accumulator, currentValue) => accumulator + currentValue,
                      initialValueAmount
                    );

                    totalSumArray.push(cartItem.price * cartItem.quantity);
                    totalSum = totalSumArray.reduce(
                      (accumulator, currentValue) => accumulator + currentValue,
                      initialValuetotalSum
                    );
                    return (
                      <React.Fragment>
                        <tbody>
                          <tr key={cartItem.id}>
                            <TdProduct>
                              <Img>
                                <img src={cartItem.image} alt="" />
                              </Img>
                              <Title>
                                <p>{cartItem.title}</p>
                              </Title>
                            </TdProduct>

                            <TdPrice>
                              <Price>
                                <p>{cartItem.price}</p>
                              </Price>
                            </TdPrice>
                            <TdQty>
                              <Qty>
                                <p>{cartItem.quantity}</p>

                                <button
                                  onClick={context.removeProductFromCart.bind(
                                    this,
                                    cartItem.id
                                  )}
                                >
                                  -
                                </button>
                                <button
                                  onClick={context.addProductInCart.bind(
                                    this,
                                    cartItem.id
                                  )}
                                >
                                  +
                                </button>
                              </Qty>
                            </TdQty>
                            <TdAmount>
                              <Amount>
                                <p>{amount.toFixed(2)}</p>
                              </Amount>
                            </TdAmount>
                          </tr>
                        </tbody>
                      </React.Fragment>
                    );
                  })}
                </Table>
                <WrapperTotalAmount>
                  <p>Total Amount: $ {totalSum.toFixed(2)}</p>
                </WrapperTotalAmount>
              </WrapperProducts>
              {submitted && valid ? (
            <SuccesMessage>Succes! Your order has been placed</SuccesMessage>
          ) : null}
              <WrapperConfirm>
                <Form onSubmit={onSubmit}>
                  {submitted && valid ? null : submitted &&
                    !values.firstName ? (
                    <ErrorMessage>* Please enter a First Name</ErrorMessage>
                  ) : null}
                  <Input
                    label="First Name:"
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleFirstName}
                  />

                  {submitted && valid ? null : submitted && !values.lastName ? (
                    <ErrorMessage>* Please enter a Last Name</ErrorMessage>
                  ) : null}
                  <Input
                    label="Last Name:"
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleLastName}
                  />

                  {submitted && valid ? null : submitted && !values.email ? (
                    <ErrorMessage>* Please enter Email</ErrorMessage>
                  ) : null}
                  <Input
                    label="Email:"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleEmail}
                  />

                  {submitted && valid ? null : submitted && !values.adress ? (
                    <ErrorMessage>* Please enter Adress</ErrorMessage>
                  ) : null}
                  <Input
                    label="Adress:"
                    type="text"
                    name="adress"
                    value={values.adress}
                    onChange={handleAdress}
                  />

                  {submitted && valid ? null : submitted && !values.phone ? (
                    <ErrorMessage>* Please enter Phone Number</ErrorMessage>
                  ) : null}
                  <Input
                    label="Phoner Number:"
                    type="number"
                    name="phone"
                    value={values.phone}
                    onChange={handlePhone}
                  />
                  <ConfirmWrapper>
                    <ConfirmBtn type="submit">Confirm Order</ConfirmBtn>
                    <ConfirmAmount>
                      <strong>$ {totalSum.toFixed(2)}</strong>
                    </ConfirmAmount>
                  </ConfirmWrapper>
                </Form>
              </WrapperConfirm>
            </>
          )}

          
        </Cart>
      </WrapperCart>
    </React.Fragment>
  );
}

export default CartPage;

const WrapperCart = styled.div`
  min-height: 100vh;
  width: 100vw;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #edeef7;
`;

const Cart = styled.div`
  height: auto;
  width: 80%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 2rem;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
`;

const WrapperProducts = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Table = styled.table`
  width: 100%;
  //Media Queries
  @media ${device.tablet} {
    font-size: 0.8rem;
  }
`;

const TdProduct = styled.td`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const TdPrice = styled.td`
  text-align: center;
  //Media Queries
  @media ${device.tablet} {
    p {
      font-size: 0.8rem;
    }
  }
`;
const TdQty = styled.td`
  text-align: center;
  button {
    width: 2rem;
    margin-left: 0.5rem;
    background-color: #c58764;
    border: none;
    color: white;
    border-radius: 2px;
    font-size: 0.9rem;
    &:hover {
      cursor: pointer;
    }
  }
  //Media Queries
  @media ${device.tablet} {
    button {
      width: 1.5rem;
      height: 0.5rem;
      font-size: 0.5rem;
    }
  }
`;
const TdAmount = styled.td`
  text-align: center;
  margin-top: 1rem;
  //Media Queries
  @media ${device.tablet} {
  }
`;

const Img = styled.div`
  margin-left: 5%;
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
  //Media Queries
  @media ${device.tablet} {
    width: 100px;
    height: 100px;
  }
  @media ${device.mobileL} {
    width: 70px;
    height: 70px;
  }
`;
const Title = styled.div`
  margin-left: 10%;
  height: 100%;
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
`;

const Qty = styled.div`
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
`;
const Amount = styled.div`
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
`;

const WrapperTotalAmount = styled.div`
  height: 2rem;
  width: 20rem;
  color: black;
  p {
    font-size: 1.3rem;
  }
  //Media Queries
  @media ${device.tablet} {
    p {
      font-size: 1rem;
      margin-left: 20%;
    }
  }
  @media ${device.mobileL} {
    p {
      font-size: 1rem;
      margin-left: 40%;
    }
  }
`;

const WrapperConfirm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 80%;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  input {
    height: 2rem;
    border: 0.3px solid grey;
    border-radius: 2px;
    font-family: "Montserrat", sans-serif;
  }
  //Media Queries
  @media ${device.tablet} {
    font-size: 0.8rem;
    input {
      height: 1.5rem;
    }
  }
`;

const ConfirmWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConfirmBtn = styled.button`
  margin-top: 2rem;
  margin-bottom: 1rem;
  background-color: #c58764;
  height: 2.5rem;
  width: 9rem;
  border: none;
  border-radius: 14px;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  font-family: "Montserrat", sans-serif;
  &:hover {
    transform: scale(1.25);
    font-size: 1rem;
  }
  //Media Queries
  @media ${device.tablet} {
    width: 5rem;
    height: 1.5rem;
    font-size: 0.5rem;
    margin-top: 1rem;
  }
`;

const ConfirmAmount = styled.p``;

const ErrorMessage = styled.span`
  color: red;
  font-size: 1rem;
  //Media Queries
  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.mobileL} {
    font-size: 0.5rem;
  }
`;
const SuccesMessage = styled.span`
  margin-top: 1rem;
  color: green;
  font-size: 1.5rem;
  //Media Queries
  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.mobileL} {
    font-size: 0.5rem;
  }
`;