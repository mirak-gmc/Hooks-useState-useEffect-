import React from "react";
import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionCounter";

import "./App.css";

function App() {
  const [isShow, setShow] = React.useState(true);
  return (
    <div className="App">
      <button onClick={() => setShow(!isShow)}>Show Component</button>
      {isShow && <FunctionCounter />}
    </div>
  );
}

export default App;
