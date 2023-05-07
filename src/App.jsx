import React, { useEffect, useState, useRef } from "react";
import Shop from "./components/Shop";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import { keyboardList } from "./database";
function App() {
  const [showCart, setShowCart] = useState(false);
  const [shopList, setShopList] = useState(
    keyboardList.map((keyboard) => ({ ...keyboard, price: 0, count: 0}))
  );
  const [counter, setCounter] = useState(0);

  return (
    <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  setShowCart={setShowCart}
                  showCart={showCart}
                  setShopList={setShopList}
                  shopList={shopList}
                  counter={counter}
                  setCounter={setCounter}
                ></Home>
              }
            ></Route>
            <Route
              path="/shop"
              element={
                <Shop
                  setShowCart={setShowCart}
                  showCart={showCart}
                  setShopList={setShopList}
                  shopList={shopList}
                  counter={counter}
                  setCounter={setCounter}
                ></Shop>
              }
            ></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
