import React, { useState, useEffect } from "react";

const FunctionCounter = () => {
  const [count, setCount] = useState(5);

  const [isShow, setIsShow] = useState(true);

  //component did mount
  useEffect(() => {
    console.log("Component is Rendring...... ");
    //component will unmount
    return () => {
      alert("The component is Dead :'( ");
    };
  }, []);

  //Component did Update
  useEffect(() => {
    console.log("Component is updated for the " + count + " time");
    return () => alert("Another brick in the wall");
  }, [count]);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const toggleShow = () => setIsShow(!isShow);

  return (
    <div>
      <button onClick={() => toggleShow()}>Show Functional Component </button>
      {isShow && (
        <div>
          <h1> {count} </h1>
          <button onClick={() => increment()}>Increment</button>
        </div>
      )}
    </div>
  );
};

export default FunctionCounter;
