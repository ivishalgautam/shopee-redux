import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchedItems } from "../store/features/searchedItemsSlice";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleChange(e) {
    // console.log(e.target.value);
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getSearchedItems(query));
    navigate(`products/${query}`);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search here..."
          className="input input-bordered w-full max-w-xs focus:border-purple-600"
          onChange={(e) => handleChange(e)}
          value={query}
        />
      </div>
    </form>
  );
};

export default SearchInput;
