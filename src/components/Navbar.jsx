import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateTotal, getCartItems } from "../store/features/cartSlice";
import SearchInput from "./SearchInput";

const Navbar = () => {
  let dispatch = useDispatch();
  const { amount, total } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [amount]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <div className="navbar bg-base-100 mb-4 sticky top-0 z-10 px-6 lg:px-40 md:px-30 sm:px-20  bg-opacity-80 backdrop-blur-lg drop-shadow-xl">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl font-lobster"
        >
          Shopee
        </Link>
      </div>
      <SearchInput />
      <div className="flex-none ml-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{amount}</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow bg-opacity-80 backdrop-blur-lg drop-shadow-xl"
          >
            <div className="card-body ">
              <span className="font-bold text-lg">{`${
                amount > 0 ? `${amount} items` : `Cart is empty`
              }`}</span>
              <span className="text-info">{`Subtotal: $${total}`}</span>
              <div className="card-actions">
                <Link
                  to="cart"
                  className="text-white text-center py-2 font-bold text-lg btn-block rounded-lg btn-primary"
                >
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
