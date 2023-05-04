import React, { useEffect, useState } from "react";
import { keyboardList } from "../database";

const Cart = ({ setShowCart, shopList, setShopList, setCounter }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let sum = 0;
    shopList.forEach((item) => {
      sum += item.price * item.count;
    });
    setTotalPrice(sum);
  }, [shopList]);

  const handleAddCount = (id) => {
    const findProduct = shopList.filter((elem) => id === elem.id);
    const findPrice = keyboardList.filter((elem) => id === elem.id);
    const newPrice = findProduct[0].price + findPrice[0].price;
    setShopList((prevList) =>
      prevList.map((prevKeyboard) =>
        prevKeyboard.id === id
          ? { ...prevKeyboard, price: newPrice, count: prevKeyboard.count + 1 }
          : prevKeyboard
      )
    );
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleRemoveCount = (id) => {
    const findProduct = shopList.filter((elem) => id === elem.id);
    const findPrice = keyboardList.filter((elem) => id === elem.id);
    const newPrice = findProduct[0].price - findPrice[0].price;
    setShopList((prevList) =>
      prevList.map((prevKeyboard) =>
        prevKeyboard.id === id
          ? { ...prevKeyboard, price: newPrice, count: prevKeyboard.count - 1 }
          : prevKeyboard
      )
    );
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-end min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={() => setShowCart(false)}
          ></div>
          <div
            className="inline-block align-bottom absolute right-0 bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-96"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Education List
                </h3>
                {shopList.map((item, index) => {
                  if (item.price) {
                    return (
                      <div
                        key={index}
                        className="rounded border border-gray-400 flex"
                      >
                        <img className="w-20 h-20 mr-2" src={item.img}></img>

                        <div className="flex gap-1 items-center">
                          <button
                            className="ml-10 transition rounded px-2 bg-gray-600"
                            onClick={() => handleRemoveCount(index)}
                          >
                            -
                          </button>
                          <p>Qty: {item.count}</p>
                          <button
                            className="transition rounded px-2 bg-gray-600"
                            onClick={() => handleAddCount(index)}
                          >
                            +
                          </button>
                          <p className="ml-10">{item.price}</p>
                          <button className="ml-10 rounded px-4 bg-red-500 hover:bg-red-400 transition-all">
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="border-t border-black w-full p-6 flex justify-between">
              <p className="text-3xl">Total: {totalPrice} </p>
              <button className="rounded px-10 py-1 bg-rose-300 hover:-translate-y-1 transition-all duration-300 hover:bg-rose-400">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
