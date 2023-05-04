import { useState } from "react";
import Shop from "./components/Shop/Shop";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  const [itemsCounter, setItemsCounter] = useState(0);
  const [showCart, setShowCart] = useState(false);

  return (
    <BrowserRouter>
      <div className="bg-gray-900">
        <div className="container mx-auto w-full flex flex-col min-w-44">
          <Routes>
            <Route path="/" element={<Home setShowCart={setShowCart}></Home>}></Route>
            <Route path="/shop" element={<Shop showCart={showCart} setShowCart={setShowCart}></Shop>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
