import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Header = ({ setShowCart, shopList, counter }) => {
  return (
    <header className="shadow-sm w-full top-0 fixed bg-white">
      <div className="container flex justify-between p-3 items-center mx-auto lg:py-4 w-full">
        <Logo></Logo>
        <nav className="flex py-5 lg:p-4 gap-2 lg:gap-10 flex-2 list-none items-center text-lg lg:text-2xl">
          <li className="cursor-pointer text-black hover:tracking-widest transition-all duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer text-black hover:tracking-widest transition-all duration-300">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="text-white">{counter}</li>
        </nav>
        <div className="flex gap-4 lg:gap-10 border-black text-2xl lg:text-4xl">
          <CgProfile className="hover:cursor-pointer"/>
          <AiOutlineSearch className="hover:cursor-pointer"/>
          <div className="flex">
            <AiOutlineShoppingCart className="hover:cursor-pointer" onClick={() => setShowCart(true)} />
            <p className="text-xl">{counter}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
