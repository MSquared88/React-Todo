import React from 'react'

class TodoForm extends React.Component {
    constructor(){
      super()
      this.state = {
        task: ''
      }
  }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.task)
    }

    handleChanges = e => {
        this.setState({
            task: e.target.value 
        })
    }


  render(){
    return(
      <form onSubmit= {this.handleSubmit}>
        <input 
          name= 'task'
          value= {this.state.task}
          onChange= {this.handleChanges}
          placeholder= '...todo'
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    )
  }
}

export default TodoForm