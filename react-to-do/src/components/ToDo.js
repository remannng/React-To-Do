import React, {Component} from 'react';

class ToDo extends Component {
  deleteTodo(description) {
    this.props.deleteTodo(description);
  }

  render () {
    return (
      <div className="wrapper">

      <button className="deleteTodo" onClick = {() =>
        this.deleteTodo(this.props.description)}>Delete</button>

      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
      </li>
      </div>
    );
  }
}


export default ToDo;
