import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { incrementAmt, addToCart } from "../store/features/cartSlice";

const Card = ({ id, thumbnail, title, description, price, item }) => {
  const dispatch = useDispatch();
  function trimStr(str, len) {
    if (str.length > len) {
      return str.substring(0, len) + "...";
    }
    return str;
  }

  function handleClick(e) {
    if (e.target.tagName === "BUTTON") {
      e.preventDefault();
      dispatch(addToCart(item));
      dispatch(incrementAmt());
    }
  }
  return (
    <Link to={`product/${id}`}>
      <div className="card w-80 bg-base-100 shadow-xl m-0">
        <figure className="px-6 pt-10">
          <img
            src={thumbnail}
            alt={title}
            className="rounded-xl h-40 object-cover object-center"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-white">{trimStr(title, 18)}</h2>
          <p className="text-sm">{trimStr(description, 50)}</p>
          <p className="font-bold text-white">{`$${price}`}</p>
          <div className="card-actions w-full">
            <button
              onClick={(e) => {
                handleClick(e);
              }}
              className="flex items-center justify-center gap-2 mt-4 font-medium text-white text-lg px-8 w-full py-2 rounded-lg bg-blue-400 hover:bg-blue-500 active:bg-blue-600 hover:-translate-y-1 transition-colors transition-transform"
            >
              <BsCartPlus className="pointer-events-none" />
              <span className="pointer-events-none">Add</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
