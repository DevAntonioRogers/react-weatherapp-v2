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
      <div>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Input;
