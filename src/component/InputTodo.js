import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "text",
  };
  onChange = (e) => {
    console.log("Hello");
  };
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default InputTodo;
