import React from 'react'

const Todo = props =>{
    return(
        <div>
            <h2 className= 'todo'>{props.todo.task}</h2>
        </div>
    )
}

export default Todo