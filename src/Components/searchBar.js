import React from "react";
import { Link } from "react-router-dom";
import searchicon from "../assets/searchicon.png";
import arrowicon from "../assets/arrowicon.png";

const SearchBar = () => {
  return (
    <>
      <div className="bg-white rounded-2xl w-3/5 h-6 mx-auto mt-8 mb-6 flex flex-row justify-between items-center md:w-5/12 xl:h-8">
        <div className="flex flex-row justify-start items-center">
          <img src={searchicon} className="w-4 h-4 m-1 xl:w-6 xl:h-6" />
          <p className="text-sm font-semibold md:text-base xl:text-xl xl:ml-2 text-[#3b54aa]">
            Shrimayee Mishra
          </p>
        </div>
        <Link to="/search">
          <img src={arrowicon} className="w-4 h-4 m-1 xl:w-6 xl:h-6" />
        </Link>
      </div>
    </>
  );
};
export default SearchBar;
