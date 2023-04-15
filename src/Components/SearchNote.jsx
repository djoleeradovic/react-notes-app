import React from "react";
import { MdSearch } from "react-icons/md";
const SearchNote = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Note"
        className="search-note"
        onChange={(e) => handleSearchNote(e.target.value)}
      />
      <MdSearch />
    </div>
  );
};

export default SearchNote;
