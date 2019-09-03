import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, ButtonGroup} from 'reactstrap';

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
        this.state.task = ''
    }

    handleChanges = e => {
        this.setState({
            task: e.target.value 
        })
    }

  render(){
    return(
      <Form onSubmit= {this.handleSubmit}>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for= "todo">Todo</Label>
              <Input 
                style= {{marginBottom: '10px'}}
                type= 'text'
                name= 'task'
                value= {this.state.task}
                onChange= {this.handleChanges}
                placeholder= '...todo'
              />
              <ButtonGroup>
                <Button>Add Todo</Button>
              </ButtonGroup>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default TodoForm