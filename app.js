import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {id : "heading"},
    "Harshali here"
);

console.log(heading);
// jsx

const JSXHeading = <h1 id="heading">Harshali is here by JSX</h1>
console.log(JSXHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JSXHeading);