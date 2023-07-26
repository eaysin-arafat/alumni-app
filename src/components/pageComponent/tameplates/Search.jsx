import React from "react";
import classes from "./Search.module.css";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <>
      <div className={classes.content}>
        <div className={classes.searchInput}>
          <input
            type="search"
            className={classes.input}
            placeholder="Search..."
          />
          <AiOutlineSearch />
        </div>
      </div>
    </>
  );
}

export default Search;
