import React from "react";
import ReactDOM from "react-dom/client";

//React
// const heading = React.createElement(
//     "h1",
//     {id : "heading"},
//     "Harshali here"
// );
// console.log(heading);


// jsx
// React Element =>JSXHeading
// const JSXHeading = <h1 id="heading">Harshali is here by JSX</h1>;
// console.log(JSXHeading);

//React components-- 1)class based component (old way)  2)functional component(new way)

const Headingcomponent = () => {
    return <h1 id="heading">Harshali by JSX</h1>
}

const Headingcomponent2 = () => (
    <div>
        
        <img src="/full-shot-astronaut-nature-collage.jpg" alt=""></img>
        <h1 id="heading">React functional component</h1>
    </div>
    
);

const number = 4000;
const Div1 = () => (
    <div id="div1">
        <Headingcomponent />
        <Headingcomponent2 />
        {number}
        
        <h3>component composition {number}</h3>
    </div>
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Div1 />);