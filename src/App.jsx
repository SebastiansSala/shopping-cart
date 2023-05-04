import React, { useEffect, useState } from "react";
import Shop from "./components/Shop";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import { keyboardList } from "./database";
function App() {

  const [showCart, setShowCart] = useState(false);
  const [itemsCounter, setItemsCounter] = useState(0);
  const [shopList, setShopList] = useState(keyboardList.map(keyboard => ({...keyboard, price: 0})));

  return (
    <BrowserRouter>
      <div className="bg-gray-900">
        <div className="container mx-auto w-full flex flex-col min-w-44">
          <Routes>
            <Route
              path="/"
              element={<Home setShowCart={setShowCart} showCart={showCart} setShopList={setShopList} shopList={shopList}></Home>}
            ></Route>
            <Route
              path="/shop"
              element={
                <Shop setShowCart={setShowCart} showCart={showCart} setShopList={setShopList} shopList={shopList}></Shop>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
