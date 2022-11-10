import React, { useState } from "react";
const Hook2usestate = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      {counter}
      <br></br>
      <button onClick={increment}> INCREMENT</button>
    </div>
  );
};
export default Hook2usestate;