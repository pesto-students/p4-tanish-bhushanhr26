import React from "react";
import "../css/searchBar.css";
import create from "../../assets/create.gif";

export default function SearchBar(props) {
  return (
    <div className="searchBar">
      <input
        placeholder="Take a note..."
        value={props.searchValue}
        onChange={(e) => {
          props.setSearchValue(e.target.value);
        }}
      />
      <button
        disabled={props.searchValue === "" ? true : false}
        onClick={() => {
          props.create(props.searchValue);
          props.setSearchValue("");
        }}
      >
        <img alt="plus" src={create} />
      </button>
    </div>
  );
}
