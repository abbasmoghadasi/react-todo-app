import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    console.log("submited form");
  };
  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <input
          type="text"
          placeholder="Add Todo ..."
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default InputTodo;
