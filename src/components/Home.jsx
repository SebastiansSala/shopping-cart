import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import Categories from "./Categories";
import GuideSection from "./GuideSection";

const Home = ({ showCart, setShowCart, shopList, counter, setCounter }) => {
  return (
    <div className="w-full h-screen">
      <Header
        setShowCart={setShowCart}
        shopList={shopList}
        counter={counter}
      ></Header>
      <Categories/>
      <GuideSection/>
      <Footer></Footer>
      {showCart && (
        <Cart
          setShowCart={setShowCart}
          shopList={shopList}
          setCounter={setCounter}
        ></Cart>
      )}
    </div>
  );
};

export default Home;
