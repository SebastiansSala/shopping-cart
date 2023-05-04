import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = ({ setShowCart, shopList, counter }) => {

  return (
    <header className="bg-gray-900 border-b w-full border-black h-14 mx-auto z-10 flex justify-between">
      <Logo></Logo>
      <nav className="flex p-4 gap-10 list-none items-center text-2xl">
        <li className="cursor-pointer text-white hover:tracking-widest transition-all duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer text-white hover:tracking-widest transition-all duration-300">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="cursor-pointer text-white hover:tracking-widest transition-all duration-300 -mr-9">
          <AiOutlineShoppingCart onClick={() => setShowCart(true)} />
        </li>
        <li className="text-white">{counter}</li>
      </nav>
    </header>
  );
};

export default Header;
