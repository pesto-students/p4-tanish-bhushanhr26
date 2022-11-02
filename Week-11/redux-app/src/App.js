import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { reset, increment } from "./feature/slice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(reset())}>Reset</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}> + </button>
    </div>
  );
}

export default App;
