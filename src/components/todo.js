import React from "react";

export default function Todo({ todo }) {

  return (
    <div className="todoContainer">
      <h3
        style={
          todo.isDone ? { color: "red", textDecoration: "line-through" } : {}
        }
      >
        {" "}
        {todo.text}{" "}
      </h3>
      <div className="todoBtns">
        <button >
          {" "}
          <i class="far fa-trash-alt"></i>
        </button>
        <button >
          {" "}
          <i class="far fa-check-circle"></i>
        </button>
      </div>
    </div>
  );
}
