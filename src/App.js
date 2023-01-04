import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Product from "./pages/Product";
import SearchResult from "./pages/SearchResult";
import Home from "./pages/Home";
import GlobalState from "./context/GlobalState";
import Cart from "./pages/Cart";
import ShopContext from "./context/ShopContext";


function App() {
  


  return (
    <GlobalState>
      <BrowserRouter>
      <ShopContext.Consumer>
        {context => (
              <Header 
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
        )}
      </ShopContext.Consumer>
           
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/searchresult/:searchTerm" element={<SearchResult />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;