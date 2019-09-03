import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';


const Todo = props =>{
    return(
        <ListGroup 
            className= {`todo${props.todo.completed ? '-completed' : '' }`}
            onClick= {() => props.toggleCompleted(props.todo.id)} 
            >
            <ListGroupItem style= {{
            textDecoration: `${props.todo.completed ? 'line-through' : ''}`,
            fontSize: '1.5rem',
            cursor: 'pointer', 
            margin: '10px 0px'
            }}
            color= {`${props.todo.completed ? 'success' : 'info' }`}
            >{props.todo.task}</ListGroupItem>
        </ListGroup>
    )
}

export default Todo