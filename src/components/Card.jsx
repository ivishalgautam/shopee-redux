import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { incrementAmt, addToCart, addCart } from "../store/features/cartSlice";

const Card = ({ id, thumbnail, title, description, price, item }) => {
  const dispatch = useDispatch();
  function trimStr(str, len) {
    if (str.length > len) {
      return str.substring(0, len) + "...";
    }
    return str;
  }

  function handleClick(e, id) {
    if (e.target.tagName === "BUTTON") {
      e.preventDefault();
      dispatch(addCart(id));
      // dispatch(incrementAmt());
    }
  }
  return (
    <Link to={`product/${id}`}>
      <div className="card rounded w-80 max-w-80 hover:scale-105 border border-gray-700 transition-all bg-base-100 shadow-xl m-0">
        <figure className="w-full h-40">
          <img
            src={thumbnail}
            alt={title}
            className=" w-full h-full object-cover object-center"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">
            {trimStr(title, 18) || "Loading"}
          </h2>
          <p className="text-sm">{trimStr(description, 60)}</p>
          <p className="font-bold text-white">{`$${price}`}</p>
          <div className="card-actions w-full">
            <button
              onClick={(e) => {
                handleClick(e, id);
              }}
              className="flex items-center justify-center gap-2 mt-4 px-8 w-full py-2 btn-primary"
            >
              <BsCartPlus className="pointer-events-none" />
              <span className="pointer-events-none">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
