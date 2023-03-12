import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, incrementAmt } from "../store/features/cartSlice";
import { getDetails } from "../store/features/productDetailSlice";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { BsCartPlus } from "react-icons/bs";
import ProductDetailSkeloton from "../components/ProductDetailSkeloton";

const ProductDetails = () => {
  const { productDetail, isLoading } = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetails(id));
  }, []);

  if (isLoading) {
    return <ProductDetailSkeloton />;
  }
  return (
    <>
      {productDetail?.map((item, key) => {
        return (
          <div
            key={key}
            className="flex flex-col items-start justify-center gap-4 sm:w-1/2 min-w-96"
          >
            <Splide
              aria-label="product images"
              options={{
                rewind: true,
                perMove: 1,
                perPage: 1,
                gap: "2rem",
                arrows: true,
                pagination: true,
              }}
            >
              {item.images.map((img, key) => {
                return (
                  <SplideSlide
                    key={key}
                    className="flex items-center justify-center"
                  >
                    <img
                      className="rounded-lg w-full h-60 object-cover object-center"
                      src={img}
                      alt={item.name}
                    />
                  </SplideSlide>
                );
              })}
            </Splide>

            <div className="w-full">
              <div className="flex items-center justify-between">
                <span className="bg-base-100 p-1 px-2 rounded-lg">{`${item.brand} product`}</span>
                <span className="font-medium">{`$${item.price}`}</span>
              </div>
              <h1 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h1>
              <p>{item.description}</p>
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                  dispatch(incrementAmt());
                }}
                className="flex items-center justify-center gap-2 btn-primary py-2 px-6 mt-4"
              >
                <BsCartPlus />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductDetails;
