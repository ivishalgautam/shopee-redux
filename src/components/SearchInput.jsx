import React from "react";

const SearchInput = () => {
  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search here..."
        className="input input-bordered w-full max-w-xs focus:border-purple-600"
      />
    </div>
  );
};

export default SearchInput;
