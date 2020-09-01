import React from "react";

const Todo = (props) => {
  return (
    <div
      onClick={() => {
        props.toggleItem(props.item.id);
      }}
      className={`item`}
    >
      <p className={`${props.item.completed ? "completed" : ""}`}>
        {props.item.name}
      </p>
    </div>
  );
};

export default Todo;
