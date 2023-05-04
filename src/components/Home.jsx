import React, { useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "../Footer";
import Cart from "./Cart";

const Home = ({showCart, setShowCart, shopList, counter, setCounter }) => {
  return (
    <div className="w-full h-screen">
      <Header setShowCart={setShowCart} shopList={shopList} counter={counter}></Header>
      <Main></Main>
      <Footer></Footer>
      {showCart && <Cart setShowCart={setShowCart} shopList={shopList} setCounter={setCounter}></Cart>}
    </div>
  );
};

export default Home;
