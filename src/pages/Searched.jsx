import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import CardLoadingSkeloton from "../components/CardLoadingSkeloton";
import { getSearchedItems } from "../store/features/searchedItemsSlice";

const Searched = () => {
  const { searchedItems, isLoading } = useSelector(
    (store) => store.searchedItems
  );
  const dispatch = useDispatch();
  const { query } = useParams();

  useEffect(() => {
    dispatch(getSearchedItems(query));
  }, []);

  if (searchedItems[0]?.products.length < 1) {
    return (
      <div className="min-w-full min-h-full flex items-center justify-center">
        <h1 className="text-2xl text-gray-400 font-bold font-poppins">
          {`Nothing found related to: ${query}`}
        </h1>
      </div>
    );
  }

  return (
    <div className="flex item-center justify-center flex-wrap gap-8">
      {searchedItems[0]?.products?.map((item, key) => {
        return isLoading ? (
          <CardLoadingSkeloton key={key} />
        ) : (
          <Card key={item.id} {...item} item={item} />
        );
      })}
    </div>
  );
};

export default Searched;
