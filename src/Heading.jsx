import React from "react";
function Heading() {
  const date = new Date();
  const currentTime = date.getHours();
  console.log(currentTime);
  let greeting = "";
  const colorType = {
    color: ""
  };
  if (currentTime < 12) {
    greeting = "good morning";
    colorType.color = "red";
  } else if (currentTime < 18) {
    greeting = "good evening";
    colorType.color = "green";
  } else {
    greeting = "good night";
    colorType.color = "blue";
  }
  return <h1 style={colorType}>{greeting}</h1>;
}
export default Heading;
