import React from "react";

class TodoItem extends React.Component {
  render() {
    return <li key={this.props.todo.key}>{this.props.todo.title}</li>;
  }
}

export default TodoItem;
