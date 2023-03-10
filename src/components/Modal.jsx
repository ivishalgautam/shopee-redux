import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/features/cartSlice";
import { closeModal } from "../store/features/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  window.addEventListener("click", (e) => {
    if (e.target.className.includes("modal-container")) {
      dispatch(closeModal());
    }
  });

  return (
    <div className="modal-container fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="w-80 md:w-80 lg:w-1/3 lg:h-1/4 p-5 sm:p-10 flex items-center justify-center gap-6 flex-col bg-opacity-80 backdrop-blur-lg drop-shadow-xl rounded-lg">
        <h1 className="text-lg sm:text-xl font-medium">
          Do you want clear cart?
        </h1>
        <div className="space-x-3">
          <button
            onClick={(e) => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
            className="bg-red-500 text-white px-8 py-2 rounded-lg font-medium text-sm"
          >
            Clear
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            className="font-medium text-white text-sm px-8 py-2 rounded-lg bg-blue-400 hover:bg-blue-500 active:bg-blue-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
