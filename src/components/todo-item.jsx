import React , {useState, Component} from 'react'

function TodoItems(props) {

  const computedStyle = {
    fontStyle: 'italic',
    color: 'gray',
    textDecoration: 'line-through'
  }

  return (
    <React.Fragment>
      <div>

        <input 
          type = 'checkbox' 
          name = 'todoItems' 
          value = {props.value} 
          id = {props.id} 
          onChange = { () => props.handleCompleted(props.id)} 
          checked = {props.isCompleted}
        />

        <label 
          htmlFor = {props.id} 
          style = {props.isCompleted ? computedStyle : null}> {props.labelText} 
        </label>

      </div>  
    </React.Fragment>
  );
}

export default TodoItems;