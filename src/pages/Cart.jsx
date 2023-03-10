import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdRemove, MdAdd } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { openModal } from "../store/features/modalSlice";
import Modal from "../components/Modal";
import { deleteItem } from "../store/features/cartSlice";

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
      <div className="min-h-full w-full gap-2 flex items-center justify-center flex-col">
        {cartItems?.map((item) => {
          return (
            <div
              key={item.id}
              className="card min-w-full card-side bg-base-100 shadow-xl block sm:flex"
            >
              <figure className="p-10">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-40 h-40 object-cover object-center rounded-lg"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-start">
                  <button
                    onClick={() => {}}
                    className="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 transition-colors text-white px-4 rounded-lg  py-2 text-lg font-medium my-auto"
                  >
                    <MdAdd />
                  </button>
                  <span></span>
                  <button className="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 transition-colors text-white px-4 rounded-lg  py-2 text-lg font-medium my-auto">
                    <MdRemove />
                  </button>
                  <button
                    className="ml-auto text-xl  btn btn-ghost btn-circle text-red-400"
                    onClick={() => dispatch(deleteItem(item.id))}
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
            className="font-medium text-white text-sm px-8 py-2 rounded-lg bg-blue-400 hover:bg-blue-500 active:bg-blue-600 transition-colors drop-shadow-2xl"
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
