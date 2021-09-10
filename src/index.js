import React from "react";
import reactDom from "react-dom";
import TodoContainer from "./component/TodoContainer";

reactDom.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
