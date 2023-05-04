import React, { useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "../Footer";
import Cart from "./Cart";

const Home = ({showCart, setShowCart, shopList}) => {
  return (
    <div className="w-full h-screen">
      <Header setShowCart={setShowCart} shopList={shopList}></Header>
      <Main></Main>
      <Footer></Footer>
      {showCart && <Cart setShowCart={setShowCart} shopList={shopList}></Cart>}
    </div>
  );
};

export default Home;
