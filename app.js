import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


const info = React.createElement("h3",{},"The JS library for web and native user interfaces!");
const name = ReactDOM.createRoot(document.getElementsByClassName("name")[0]);
name.render(info);

const info1 = React.createElement("p",{},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates soluta laudantium fuga, quam illum unde facere similique delectus ipsum nulla? Qui deserunt quibusdam, error doloremque minus facere pariatur rem.");
const more_info = ReactDOM.createRoot(document.getElementsByClassName("name")[1]);
more_info.render(info1);
        

// {/* <div id="parent">
//         <div id="child">
//             <h1></h1>
//         </div>
// </div> */}


const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {},
            "This is h1 tag"
            ),
            React.createElement(
                "h2",
                {},
                "This is h2 tag"
                   
            ),
            React.createElement(
                "p",
                {},
                "Nesting Divs and siblings"
                   
            )
        ]



    )

);

root.render(parent);
