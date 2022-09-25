import React from "react";
import "./App.css";
import Main from "./components/jsx/Main";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [value, setValue] = React.useState([]);

  function create(x) {
    value.push(x);
  }
  function handleDeleteClick(id) {
    const removeItem = value.splice(0, id);

    setValue(removeItem);
  }
  function handleUpdate(x, id) {
    const removeItem = value.splice(0, id);

    setValue(removeItem);
    setSearchValue(x);
  }

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
