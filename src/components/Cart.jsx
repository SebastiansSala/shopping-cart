import React from "react";

const Cart = ({ setShowCart, shopList }) => {
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
                  if(item.price){
                    return (
                      <div key={index} className="rounded border border-gray-400 flex">
                      <img className="w-20 h-20 mr-2" src={item.img}></img>
                      <p>{item.price}</p>
                    </div>
                  );
                  }
                })}
              </div>
            </div>
            <div className="border-t border-black w-full p-6 flex justify-between">
              <p className="text-3xl">Total: </p>
              <button className="rounded px-10 py-1 bg-rose-300 hover:-translate-y-1 transition-all duration-300 hover:bg-rose-400">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
