import React from 'react';

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

  toggleStatus = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return{
            task: todo.task,
            id: todo.id,
            completed: (!todo.completed)
          }
        }else {return todo}
      })
    })
  }

  render() {
    
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos= {this.state.todos} toggleStatus= {this.toggleStatus} />
        <TodoForm addTodo= {this.addTodo}/>
      </div>
    );
  }
}

export default App;
