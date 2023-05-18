"use client";

import SearchIcon from "@mui/icons-material/Search";

const Input = () => {
  return (
    <div className="flex">
      <input
        type="text"
        className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
        placeholder="Search"
      />
      <SearchIcon />
    </div>
  );
};

export default Input;
