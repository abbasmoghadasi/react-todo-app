import React from "react";
import reactDOM from "react-dom";
// Component Files
import TodoContainer from "./component/TodoContainer";

// Style sheet
import "./App.css";
reactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
