import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor(props) {
    super(props);
    this.state = {
      itemText: "",
      // statePropThatReliesOnProps: props.something,
    };
  }

  handleChanges = (e) => {
    // update state with each keystroke
    this.setState({
      itemText: e.target.value,
    });
  };

  // class property to submit form
  handleSubmit = (e) => {
    e.preventDefault();
    // call addItem prop
    this.props.addItem(this.state.itemText);
    this.setState({
      itemText: "",
    });
  };

  render() {
    // destructure props or state here
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="itemText"
          value={this.state.itemText}
          onChange={this.handleChanges}
        />
        <button>Add ToDo</button>
        <button
          className="clear-btn"
          onClick={(e) => {
            this.props.clearCompleted(e);
          }}
        >
          Clear Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
