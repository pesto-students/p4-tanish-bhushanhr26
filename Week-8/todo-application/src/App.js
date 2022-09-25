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
    const removeItem = value.splice(0, i);
    setValue(removeItem);
  }
  function handleUpdate(x, i) {
    const removeItem = value.filter((item) => {
      return item.i !== i;
    });
    setSearchValue(removeItem);
  }
  console.log(value);
  return (
    <Main
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      create={create}
      value={value}
      handleDeleteClick={handleDeleteClick}
      handleUpdate={handleUpdate}
    />
  );
}

export default App;
