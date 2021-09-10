import React from "react";
import reactDom from "react-dom";

const element = <h1>Hello from React</h1>;
reactDom.render(element, document.getElementById("root"));
console.log(element);
