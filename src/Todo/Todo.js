import  TodoList from '../TodoList/TodoList'
import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todoItems: [],
      currentTodoItem : {
        value: "",
        isDone: false
      },
    }
  }
  addTodo(){
    let todoItems = this.state.todoItems.slice();
    todoItems.push(this.state.currentTodoItem);
    this.setState({
      todoItems: todoItems,
      currentTodoItem: {
        value: "",
        isDone: false
      }
    })
  }
  handleChange(e){
    let changedTodoItem = {
      value: e.target.value,
      isDone: false
    }
    this.setState({
      currentTodoItem : changedTodoItem 
      }
    )
  }
  itemClicked(e){
    let todoItemsCopy = this.state.todoItems.slice();
    todoItemsCopy.forEach((item)=>{
      if(item.value === e.target.value){
        item.isDone = true;
      }
    })
    this.setState({
      todoItems: todoItemsCopy
    });
  }
  render (){
    return(
    <div>
      <TodoList todoItems = {this.state.todoItems} itemClicked={(e)=>this.itemClicked(e)}></TodoList>
      <input type="text" value={this.state.currentTodoItem.value} onChange={(e)=>this.handleChange(e)}/>
      <button onClick={()=>{this.addTodo()}}>Add Item</button>
    </div>
    )
  }
}

export default Todo;
