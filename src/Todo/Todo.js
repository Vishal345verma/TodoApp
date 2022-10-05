import TodoList from "../TodoList/TodoList";
import React from "react";
import "./Todo.css";
import { Alert, Button, Container, Input } from "@mui/material";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      currentTodoItem: {
        value: "",
        isDone: false,
      },
      isValidInput: true,
    };
  }
  addTodo() {
    let todoItems = this.state.todoItems.slice();
    if (this.state.currentTodoItem.value === "") {
      console.log("empty value");
      this.setState({
        isValidInput: false,
      });
    } else {
      todoItems.push(this.state.currentTodoItem);
      this.setState({
        todoItems: todoItems,
        currentTodoItem: {
          value: "",
          isDone: false,
        },
        isValidInput: true,
      });
    }
  }
  handleChange(e) {
    let changedTodoItem = {
      value: e.target.value,
      isDone: false,
    };
    this.setState({
      currentTodoItem: changedTodoItem,
    });
  }
  itemClicked(e) {
    let todoItemsCopy = this.state.todoItems.slice();
    console.log(e);
    todoItemsCopy.forEach((item) => {
      if (item.value === e) {
        item.isDone = true;
      }
    });
    this.setState({
      todoItems: todoItemsCopy,
    });
    console.log(this.state.todoItems);
  }
  render() {
    return (
      <div className="mainContainer">
        <h1>TODO LIST APP</h1>
        <TodoList
          todoItems={this.state.todoItems}
          itemClicked={(e) => this.itemClicked(e)}
        ></TodoList>
        <Input
          type="text"
          sx={{ p: 1, m: 1 }}
          value={this.state.currentTodoItem.value}
          onChange={(e) => this.handleChange(e)}
        />
        <Button
          variant="contained"
          onClick={() => {
            this.addTodo();
          }}
        >
          Add Item
        </Button>
        {!this.state.isValidInput ? (
          <Alert severity="error">
            Cannot add empty task to the list. Enter a valid task.
          </Alert>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Todo;
