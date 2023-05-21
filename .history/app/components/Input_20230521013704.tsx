"use client";

import SearchIcon from "@mui/icons-material/Search";

const Input = ({ handleSearch, setLocation, location }) => {
  return (
    <form className="flex items-center md:w-2/4 w-full">
      <input
        type="text"
        className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
        placeholder="Search"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="ml-[-25px] text-white cursor-pointer">
        <SearchIcon />
      </div>
    </form>
  );
};

export default Input;
