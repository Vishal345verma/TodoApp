import React from 'react';
import './TodoItem.css'
class TodoItem extends React.Component{
    render(){
        return(
            <div>
            <input type='checkbox' name={this.props.value} onChange={(e)=>this.props.handleClick(e)} disabled={this.props.disabled} value={this.props.value}/>
            <label className={this.props.disabled? 'doneLabel': ''}>{this.props.value}</label>
            </div>
        );
    }
}
export default TodoItem;