import React from 'react';
import { Button } from 'reactstrap';

//components
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super()
    this.state = {
      todos: []
    }
  }


  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })

  }

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return{
            ...todo,
            completed: !todo.completed
          }
        }else {return todo;}
      })
    })
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)

    })
  }

  render() {
    
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        addTodo= {this.addTodo}
        clearCompleted= {this.clearCompleted}
        />
        <TodoList 
        todos= {this.state.todos} 
        toggleCompleted= {this.toggleCompleted} 
        />
        <Button onClick= {() => this.clearCompleted()}
        >Clear Completed</Button>


      </div>
    );
  }
}

export default App;
