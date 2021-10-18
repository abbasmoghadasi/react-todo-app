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
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("please Write an Item..");
    }
  };
  render() {
    return (
      <form onSubmit={this.handelSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo ..."
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          className="input-text"
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
