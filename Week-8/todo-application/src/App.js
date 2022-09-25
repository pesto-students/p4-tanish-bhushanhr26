import React from "react";
import "./App.css";
import Main from "./components/jsx/Main";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [value, setValue] = React.useState([]);

  function create(x) {
    value.push(x);
  }
  function handleDeleteClick(i) {
    const removeItem = value.filter((x,i) => {
      return x.i !== i;
    });
    setValue(value);
  }
  console.log(value);
  return (
    <Main
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      create={create}
      value={value}
      handleDeleteClick={handleDeleteClick}
    />
  );
}

export default App;
