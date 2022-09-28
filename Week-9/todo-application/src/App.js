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
    // main component for UI
    <Main
      searchValue={searchValue} //props for search field
      setSearchValue={setSearchValue} //props for setting the search field
      create={create} // props for create function
      value={value} //props for value (stored data from Input field)
      handleDeleteClick={handleDeleteClick} //props for delete function
      handleUpdate={handleUpdate} // props for update function
    />
  );
}

export default App;
