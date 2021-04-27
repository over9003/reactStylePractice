//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let greeting;
let headColor = {
  color: ""
};
let date = new Date().getHours();
if (0 <= date && date < 12) {
  greeting = "morning";
  headColor.color = "red";
} else if (12 <= date && date < 18) {
  greeting = "afternoon";
  headColor.color = "green";
} else {
  greeting = "evening";
  headColor.color = "pink";
}

ReactDOM.render(
  <h1 style={headColor} className="heading">
    Good {greeting}
  </h1>,
  document.getElementById("root")
);
