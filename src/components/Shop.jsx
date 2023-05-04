import React, { useEffect, useState } from "react";
import { keyboardList } from "../database";
import Header from "./Header";
import Footer from "../Footer";
import Cart from "./Cart";

const Shop = ({ setShowCart, showCart, setShopList, shopList, counter, setCounter}) => {
  
  const handleProduct = (id, keyboard) => {
    const findProduct = shopList.filter((elem) => id === elem.id);
    const newPrice = findProduct[0].price + keyboard.price;
    setShopList((prevList) =>
      prevList.map((prevKeyboard) =>
        prevKeyboard.id === id
          ? { ...prevKeyboard, price: newPrice, count: prevKeyboard.count + 1 }
          : prevKeyboard
      )
    );
    setCounter(counter + 1);
  };

  return (
    <div>
      <Header setShowCart={setShowCart} shopList={shopList} counter={counter}></Header>
      <div className="flex-1 flex flex-wrap gap-10 mt-20 justify-center">
        {keyboardList.map((keyboard, index) => (
          <div className="rounded-xl w-80 h-90 p-10 bg-gray-800" key={index}>
            <img
              src={keyboard.img}
              className="rounded w-full h-40 object-cover"
            ></img>
            <p className="text-white mt-6 text-3xl font-bold">
              Name{keyboard.name}
            </p>
            <p className="text-white mt-6 text-2xl">arst{keyboard.desc}</p>
            <p className="mt-6 text-2xl text-rose-200 font-bold">
              ${keyboard.price}
            </p>
            <button
              className="bg-blue-400 hover:bg-blue-100 -ml-2 mt-4 px-8 py-2 rounded-md text-2xl"
              onClick={() => handleProduct(index, keyboard)}
            >
              Add
            </button>
          </div>
        ))}
      </div>
      <Footer></Footer>
      {showCart && <Cart setShowCart={setShowCart} shopList={shopList} setShopList={setShopList} setCounter={setCounter}></Cart>}
    </div>
  );
};

export default Shop;
