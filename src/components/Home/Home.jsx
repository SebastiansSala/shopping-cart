import React, { useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "../../Footer";
import Cart from "../Cart/Cart";

const Home = ({showCart, setShowCart}) => {
  return (
    <div className="w-full h-screen">
      <Header setShowCart={setShowCart}></Header>
      <Main></Main>
      <Footer></Footer>
      {showCart && <Cart setShowCart={setShowCart}></Cart>}
    </div>
  );
};

export default Home;
