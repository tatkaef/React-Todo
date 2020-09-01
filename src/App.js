import React from "react";
import "./components/Todo.css";
import Todolist from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const tododata = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tododata: tododata,
    };
  }
  toggleItem = (id) => {
    this.setState({
      tododata: this.state.tododata.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  clearCompleted = (event) => {
    event.preventDefault();
    this.setState({
      tododata: this.state.tododata.filter((item) => {
        return item.completed === false;
      }),
    });
  };

  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: new Date(),
      completed: false,
    };

    this.setState({
      tododata: [...this.state.tododata, newItem],
    });
  };

  render() {
    console.log(this.state.tododata);
    return (
      <div className="header">
        <h2>Your ToDo List:</h2>
        <div>
          <Todolist
            toggleItem={this.toggleItem}
            tododata={this.state.tododata}
          />
          <TodoForm
            addItem={this.addItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
