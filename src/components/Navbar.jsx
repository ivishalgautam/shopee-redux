import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { calculateTotal, getCartItems } from "../store/features/cartSlice";
import SearchInput from "./SearchInput";
import { getSearchedItems } from "../store/features/searchedItemsSlice";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  let dispatch = useDispatch();
  const { amount, total } = useSelector((store) => store.cart);
  const { query } = useParams();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [amount]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(getSearchedItems(query));
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      });
  }, [query]);

  return (
    <>
      <div className="sticky top-0 z-10 bg-opacity-80 backdrop-blur-lg drop-shadow-xl bg-base-100 px-6 lg:px-40 md:px-30 sm:px-20">
        <div className="navbar ">
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
                  <span className="badge badge-sm indicator-item">
                    {amount}
                  </span>
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
        <div className="mb-4 py-2">
          <div className="z-10 mb-1 text-center sm:text-start">
            <button
              onClick={() => setShow(!show)}
              className="btn-primary hover:translate-y-0 text-gray-100 py-1 px-3 rounded"
            >
              Categories:
              <span className="ml-2">
                {show ? (
                  <IoIosArrowUp className="inline" />
                ) : (
                  <IoIosArrowDown className="inline" />
                )}
              </span>
            </button>
          </div>
          <div
            className={`${
              show ? "block" : "hidden"
            } flex items-center justify-start flex-wrap`}
          >
            {categories
              ?.filter((category) => !category.includes("-"))
              .map((category) => (
                <Link
                  to={`products/${category}`}
                  className="inline-block m-1"
                  onClick={() => setShow(false)}
                >
                  <span className="bg-gray-600 hover:bg-gray-700 text-gray-100  px-2 rounded">
                    {category}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
