import { Checkbox, FormControlLabel, FormLabel, Input } from '@mui/material';
import React from 'react';
import './TodoItem.css'
class TodoItem extends React.Component{
    render(){
        return(
            <FormControlLabel control={<Checkbox
                onChange={()=>this.props.handleClick(this.props.value)}>
            </Checkbox>} sx={{ display: 'block'}}label={this.props.value} disabled={this.props.disabled} ></FormControlLabel>
        );
    }
}
export default TodoItem;