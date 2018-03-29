import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listName: "To Do List", tasks: [{text: 'item 1', time: '30'}], text: '', time: '' };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h1 className="listName"> {this.state.listName} </h1>
        
        {/*ToDoList*/}
        <TodoList tasks={this.state.tasks} />
        
        {/*Add New Tasks*/}
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleTextChange}
            value={this.state.text}
            placeholder="Name"
          />
          <input
            onChange={this.handleTimeChange}
            value={this.state.time}
            placeholder="Time"
          />
          <button>Add</button>
        </form>
      </div>
    );
  }

  // Update text
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  // Update time
  handleTimeChange(e) {
    this.setState({ time: e.target.value });
  }

  // Add Task
  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.text.length || !this.state.time.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      time: this.state.time,
      id: Date.now()
    };

    // Reset State
    this.setState(prevState => ({
      tasks: prevState.tasks.concat(newItem),
      text: '',
      time: '',
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="toDoList">
        {this.props.tasks.map(task => (
          <div className="task" key={task.id}>
            <div className="taskText"> {task.text} </div>
            <div className="taskTime"> {task.time} </div>
          </div>
        ))}
      </div>
    );
  }
}

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', time: '' }
  }
}

ReactDOM.render(<TodoApp />, document.querySelector('#app'));