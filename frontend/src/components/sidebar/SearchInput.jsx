import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className="relative w-full">
      <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-lg pointer-events-none" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-11 input input-bordered h-10 rounded-full bg-white/20 text-white placeholder:text-gray-300 border border-white/20 focus:border-gray-200 focus:outline-none focus:ring-0 focus:shadow-none"
      />
    </div>
  );
};

export default SearchInput;
