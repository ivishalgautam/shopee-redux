import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdRemove, MdAdd } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { openModal } from "../store/features/modalSlice";
import Modal from "../components/Modal";
import {
  calculateTotal,
  decrementAmt,
  deleteItem,
  getCartItems,
  incrementAmt,
} from "../store/features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  if (amount < 1) {
    return (
      <div className="min-w-full min-h-full flex items-center justify-center">
        <h1 className="text-2xl text-gray-400 font-bold font-poppins">
          Your cart is empty :/
        </h1>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-full w-full gap-2 flex items-center justify-center flex-col pb-16">
        {cartItems[0]?.map((item) => {
          return (
            <div
              key={item.id}
              className="card min-w-full card-side bg-base-100 shadow-xl block sm:flex"
            >
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="font-bold text-lg text-gray-300">{`$${item.price}`}</p>
                <div className="card-actions flex items-center justify-start">
                  <button
                    className="px-4 py-2 btn-primary my-auto hover:translate-y-0"
                    onClick={() => {
                      if (item.quantity === 1) {
                        dispatch(deleteItem(item));
                        return;
                      }
                      dispatch(decrementAmt(item));
                    }}
                  >
                    <MdRemove />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => {
                      dispatch(incrementAmt(item));
                    }}
                    className="px-4 py-2 btn-primary my-auto hover:translate-y-0"
                  >
                    <MdAdd />
                  </button>

                  <button
                    className="ml-auto text-xl  btn btn-ghost btn-circle text-red-400"
                    onClick={() => dispatch(deleteItem(item))}
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {isOpen && <Modal />}
      </div>
      <div className="navbar bg-base-100 fixed bottom-0 left-0 bg-opacity-80 backdrop-blur-lg drop-shadow-xl">
        <div className="w-full text-2xl flex items-center justify-around">
          <button
            onClick={() => dispatch(openModal())}
            className="font-medium text-white text-sm px-8 py-2 rounded-lg btn-primary"
          >
            Clear cart
          </button>
          <span className="text-sm text-white font-medium">{`Total: $${total}`}</span>
        </div>
      </div>
    </>
  );
};

export default Cart;
