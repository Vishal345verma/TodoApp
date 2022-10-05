import React from 'react';
import TodoItem from '../TodoItem/TodoItem'
class TodoList extends React.Component{
    render(){
        let result = [];
        this.props.todoItems.forEach((item)=>{
            result.push(<TodoItem value={item.value} disabled={item.isDone} handleClick={(e)=>this.props.itemClicked(e)}></TodoItem>);
        });
        return(
            result
        );
    }
}
export default TodoList;