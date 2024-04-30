import React, { useState } from "react";

/*function Toggle() {
 let [on, setIsOn] = useState(false);
 function handleClick() {
    setIsOn((isOn)=> !isOn);
  }
  const color=isOn ? "red" : "white";
  return <button style={{background : color}}onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
// Here we are using the useState hook to create a state variable called on and a function called setIsOn.
// we're doing some conditional rendering to dynamically determine button's text based on the value of the on state variable.
}


export default Toggle;
*/
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
export default Toggle;