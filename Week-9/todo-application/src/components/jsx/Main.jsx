import React from "react";
import SearchBar from "./SearchBar";
import "../css/main.css";
import edit from "../../assets/edit.gif";
import trash from "../../assets/delete.gif";

export default function main(props) {
  return (
    <div className="body">
      <div className="searchBody">
        <SearchBar
          setSearchValue={props.setSearchValue}
          searchValue={props.searchValue}
          create={props.create}
          value={props.value}
        />
      </div>
      <div>
        {props.value.map((x, i) => {
          return (
            <div key={i} className="content">
              {x}
              <div>
                <img src={edit} alt="edit" onClick={()=>{
                  props.handleUpdate(x,i)
                }}/>
                <img
                  src={trash}
                  alt="delete"
                  onClick={() => {
                    props.handleDeleteClick(i);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
