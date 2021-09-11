import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => console.log("changed")}
        />
        {this.props.todo.title}
      </li>
    );
  }
}

// function TodoItem(props) {
//   return <li>{props.todo.title}</li>;
// }

export default TodoItem;
